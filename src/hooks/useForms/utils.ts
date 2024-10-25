import type {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormSetError,
} from "react-hook-form";
import type { ParsedFormErrors } from "./type";

const validateSchemaKey = (schema: string[], key: string) => {
  const hasKey = schema.includes(key);

  if (!hasKey)
    throw new Error(
      `Wrong schema: Zod Schema keys must match the BE schema property "${key}" not found in the initialValues`
    );
};

const stringifyError = (error: APIError["errors"][number]["constraints"]) => {
  const values = Object.values(error);
  return JSON.stringify(values);
};

const parseErrors = <Values extends FieldValues>(
  errors: FieldErrors<Values>
): ParsedFormErrors<Values> => {
  const parsedErrors: ParsedFormErrors<Values> = {} as ParsedFormErrors<Values>;

  for (const [k, value] of Object.entries(errors)) {
    const key = k as keyof ParsedFormErrors<Values>;
    const fieldError = value as FieldError;

    try {
      parsedErrors[key] = fieldError.message as any;
    } catch (_e) {
      parsedErrors[key] = value as any; // If parsing fails, leave the value as is
    }
  }

  return parsedErrors;
};

const handleChildrenErrors = (
  children: APIError["errors"][number]["children"],
  cb: (childErr: APIError["errors"][number], idx: number) => void
) => {
  children?.forEach((entityErrors, idx) => {
    entityErrors.forEach((childErr) => {
      if (!childErr.children?.length) return cb(childErr, idx);
      return handleChildrenErrors(childErr.children, cb);
    });
  });
};

/**
 *
 * @param errors  - react-hook-form errors
 * @returns  - Flattened errors
 */
const flattenErrors = (errors: any): string[] => {
  if (typeof errors === "string") return [errors];
  if (Array.isArray(errors)) return errors.flatMap(flattenErrors);
  if (typeof errors === "object") {
    return Object.values(errors).flatMap(flattenErrors);
  }
  return [];
};

/**
 * Handles API validation errors and sets them in react-hook-form
 *
 * @param errors - API errors from the backend
 * @param setError - react-hook-form's setError function to set field-level errors
 */
const handleApiValidationError = (
  errors: APIError["errors"],
  setError: UseFormSetError<any>
) => {
  errors?.forEach((err) => {
    if (err.children?.length) {
      return handleChildrenErrors(err.children, (childErr, idx) => {
        setError(`${err.property}.${idx}.${childErr.property}`, {
          message: stringifyError(childErr.constraints),
        });
      });
    }
    setError(err.property, { message: stringifyError(err.constraints) });
  });
};

export {
  flattenErrors,
  handleApiValidationError,
  handleChildrenErrors,
  parseErrors,
  stringifyError,
  validateSchemaKey,
};
