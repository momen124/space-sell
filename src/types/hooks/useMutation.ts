import { api } from "@/service/api";
import type { MutationFunction, MutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { ModalProps } from "./modals";

interface BaseRestrictedMutationOptions<
  TData = unknown,
  TError = AxiosError<any>,
  TVariables = void,
  TContext = unknown
> extends Omit<
    MutationOptions<TData, TError, TVariables, TContext>,
    "onError" | "onSuccess" | "mutationFn"
  > {
  mutationFn: MutationFunction<TData, TVariables>;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined
  ) => ModalProps | Promise<ModalProps> | Promise<void> | void;
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined
  ) => ModalProps | Promise<ModalProps> | Promise<void> | void;
  revalidateOnSettled?: boolean;
  // withFormik?: boolean;
}

export type QueryOptions = {
  readonly queryKey: ReturnType<typeof api.getQueryOptions>["queryKey"];
};

export type WithRevalidateOnSettled = {
  revalidateOnSettled: true;
  /**
   * Query options Factory from /libs/services/my-service.ts
   */
  queryOptions: QueryOptions | QueryOptions[] | string[];
};

type WithoutRevalidateOnSettled = {
  revalidateOnSettled?: false;
};

export type RestrictedMutationOptions<
  TData = unknown,
  TError = AxiosError<any>,
  TVariables = void,
  TContext = unknown
> = BaseRestrictedMutationOptions<TData, TError, TVariables, TContext> &
  (WithRevalidateOnSettled | WithoutRevalidateOnSettled);
