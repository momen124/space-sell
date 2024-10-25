import type { UseMutateAsyncFunction } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import type {
  DefaultValues,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import type { z } from "zod";

export type FormsProps<T extends FieldValues = any> = UseFormReturn<T>;

export interface UseForms<Values extends FieldValues> {
  onSubmit: UseMutateAsyncFunction<
    unknown,
    AxiosError<ApiError>,
    Values,
    unknown
  >;
  validationSchema: z.ZodSchema<Values>;
  initialValues: DefaultValues<Values>;
  resetOnSuccess?: boolean
}

export type ParsedFormErrors<Values> = {
  [K in keyof Values]: Values[K] extends object
    ? ParsedFormErrors<Values[K]>
    : string | string[];
};

export interface CustomUseFormsReturn<Values extends FieldValues>
  extends Omit<UseFormReturn<Values, any, undefined>, "handleSubmit"> {
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
  errors: ParsedFormErrors<Values>;
  submitCount: number;
}
