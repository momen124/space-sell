import type { UseMutationResult } from "@tanstack/react-query";
import {
  useMutation as _useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { modals } from "@/packages/modals/modals";
import { ModalProps } from "@/types/hooks/modals";
import type { RestrictedMutationOptions } from ".";
import unAuthorizedHandler from "./unauthed";
import { getQueryKey } from "./utils";

/**
 * A custom hook that wraps the `useMutation` hook from `react-query` library and provides additional error handling and revalidation functionality.
 * @template TData The expected response data type.
 * @template TVariables The expected request variables type.
 * @template TContext The expected context type.
 * @param {RestrictedMutationOptions<TData, AxiosError<APIError>, TVariables, TContext>} options The mutation options object.
 * @returns {UseMutationResult<TData, AxiosError<APIError>, TVariables, TContext>} The result object of the mutation hook.
 *
 */
function useMutation<TData = unknown, TVariables = void, TContext = unknown>({
  // withFormik = true,
  ...options
}: RestrictedMutationOptions<
  TData,
  AxiosError<any>,
  TVariables,
  TContext
>): UseMutationResult<TData, AxiosError<any>, TVariables, TContext> {
  const queryClient = useQueryClient();

  const mutation = _useMutation({
    ...options,

    async onError(error, variables, context) {
      /**
       * Auth Errors
       */
      unAuthorizedHandler(error);
      /**
       * All validation(422) errors are handled by the useForms hook. it will show the error inline with the input
       */
      if (error.status !== 422) {
        /**
         * If the error is not a validation error, the BE error message will be shown in a modal; if there is no onError callback the error will be shown in a modal without actions buttons
         */
        const params: ModalProps = (await options.onError?.(
          error,
          variables,
          context
        )) || {
          id: `Mutations.Error${error.response?.config.url?.toString()}`,
          title: "Something Went Wrong",
          subTitle: error.response?.data?.message || error.message,
          classNames: {
            subTitle: "text-center",
          },
          secondaryButtonAction: () => {
            modals.close("loadingModal");
          },
        };

        modals.openErrorModal(params);
      }

      return options.onError?.(error, variables, context);
    },
    async onSuccess(data, variables, context) {
      /**
       * If the request is successful, the onSuccess callback will be called or modal will be shown based on the onSuccess Return type
       */
      const params = await options.onSuccess?.(data, variables, context);
      if (params) {
        modals.openSuccessModal(params);
      }
    },
    onSettled(data, error, variables, context) {
      if (options.revalidateOnSettled) {
        const keys = getQueryKey(options.queryOptions);
        keys.forEach((key) => {
          queryClient.invalidateQueries({
            exact: false,
            queryKey: [key],
            type: "all",
          });
        });
      }
      return options.onSettled?.(data, error, variables, context);
    },
  });

  return mutation;
}

export { useMutation };
