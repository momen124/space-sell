import { zodKeys } from "@/utils/zodKeys";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ZodEffects, ZodObject, ZodTypeAny } from "zod";
import type { CustomUseFormsReturn, UseForms } from "./type";
import {
  handleApiValidationError,
  parseErrors,
  validateSchemaKey,
} from "./utils";

export function useForms<Values extends FieldValues>(
  props: UseForms<Values>
): CustomUseFormsReturn<Values> {
  const { onSubmit, initialValues, ...formProps } = props;
  const [backendError, setBackendError] = useState<string | null>(null);

  useEffect(() => {
    if (backendError) {
      throw new Error(
        `Wrong schema: Validation schema keys and form data keys must match. The key "${backendError}" was not found in initialValues.`
      );
    }
  }, [backendError]);

  let schemaShape: ZodTypeAny;
  let schemaKeys: string[];

  if (
    !(
      props.validationSchema instanceof ZodEffects ||
      props.validationSchema instanceof ZodObject
    )
  ) {
    throw new Error("Validation schema must be a ZodObject.");
  }

  if (props.validationSchema instanceof ZodEffects) {
    schemaShape = props.validationSchema._def.schema;
    schemaKeys = zodKeys(schemaShape);
  } else {
    schemaShape = props.validationSchema._def.shape();
    schemaKeys = Object.keys(schemaShape);
  }

  const initialValuesKeys = Object.keys(initialValues);

  initialValuesKeys.forEach((key) => validateSchemaKey(schemaKeys, key));
  schemaKeys.forEach((key) => validateSchemaKey(initialValuesKeys, key));

  const form = useForm<Values>({
    defaultValues: {
      ...initialValues,
    },
    resolver: zodResolver(props.validationSchema),
    mode: "onSubmit",
    ...formProps,
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, submitCount },
    setError,
    reset,
  } = form;

  const handleFormSubmit = async (val: Values) => {
    try {
      await onSubmit(val);
      if (props.resetOnSuccess) form.reset(initialValues);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.status === 422) {
        const { response } = error as AxiosError<APIError>;
        const serverErrors = response?.data.errors;

        const checkHasBackendError = (
          err: APIError["errors"][number]
        ): boolean => {
          return schemaKeys.includes(err.property);
        };

        if (serverErrors) {
          handleApiValidationError(serverErrors, (field, message, err) => {
            if (err && !checkHasBackendError(err as any)) {
              setBackendError((err as any).property);
            }

            setError(field as any, message);
          });
        }
      }
    }
  };

  useEffect(() => {
    if (isValid) return;

    const element =
      document.querySelector("input[data-error=true]") ||
      document.querySelector("div[data-error=true]");

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [isValid, submitCount]);

  return {
    ...form,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    reset,
    isSubmitting,
    errors: parseErrors(errors),
    submitCount,
  };
}
