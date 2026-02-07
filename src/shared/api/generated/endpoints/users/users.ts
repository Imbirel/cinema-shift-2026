/* eslint-disable */
// @ts-nocheck
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { instance } from '../../../instance';
import type {
  SessionResponse,
  SignInDto,
  SignInResponse,
  UpdateProfileDto,
  UpdateProfileResponse,
} from '../../models';

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

/**
 * @summary Авторизация
 */
export const usersControllerSignin = (
  signInDto: SignInDto,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<SignInResponse>(
    {
      url: `/api/users/signin`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signInDto,
      signal,
    },
    options,
  );
};

export const getUsersControllerSigninMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerSignin>>,
    TError,
    { data: SignInDto },
    TContext
  >;
  request?: SecondParameter<typeof instance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersControllerSignin>>,
  TError,
  { data: SignInDto },
  TContext
> => {
  const mutationKey = ['usersControllerSignin'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerSignin>>,
    { data: SignInDto }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerSignin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerSigninMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerSignin>>
>;
export type UsersControllerSigninMutationBody = SignInDto;
export type UsersControllerSigninMutationError = unknown;

/**
 * @summary Авторизация
 */
export const useUsersControllerSignin = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof usersControllerSignin>>,
      TError,
      { data: SignInDto },
      TContext
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof usersControllerSignin>>,
  TError,
  { data: SignInDto },
  TContext
> => {
  return useMutation(
    getUsersControllerSigninMutationOptions(options),
    queryClient,
  );
};
/**
 * @summary Обновить профиль пользователя
 */
export const usersControllerUpdateProfile = (
  updateProfileDto: UpdateProfileDto,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<UpdateProfileResponse>(
    {
      url: `/api/users/profile`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: updateProfileDto,
      signal,
    },
    options,
  );
};

export const getUsersControllerUpdateProfileMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
    TError,
    { data: UpdateProfileDto },
    TContext
  >;
  request?: SecondParameter<typeof instance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
  TError,
  { data: UpdateProfileDto },
  TContext
> => {
  const mutationKey = ['usersControllerUpdateProfile'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
    { data: UpdateProfileDto }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerUpdateProfile(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerUpdateProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdateProfile>>
>;
export type UsersControllerUpdateProfileMutationBody = UpdateProfileDto;
export type UsersControllerUpdateProfileMutationError = unknown;

/**
 * @summary Обновить профиль пользователя
 */
export const useUsersControllerUpdateProfile = <
  TError = unknown,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
      TError,
      { data: UpdateProfileDto },
      TContext
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
  TError,
  { data: UpdateProfileDto },
  TContext
> => {
  return useMutation(
    getUsersControllerUpdateProfileMutationOptions(options),
    queryClient,
  );
};
/**
 * @summary Получить сессию пользователя
 */
export const usersControllerSession = (
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<SessionResponse>(
    { url: `/api/users/session`, method: 'GET', signal },
    options,
  );
};

export const getUsersControllerSessionQueryKey = () => {
  return [`/api/users/session`] as const;
};

export const getUsersControllerSessionQueryOptions = <
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof usersControllerSession>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof instance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getUsersControllerSessionQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof usersControllerSession>>
  > = ({ signal }) => usersControllerSession(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersControllerSession>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type UsersControllerSessionQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerSession>>
>;
export type UsersControllerSessionQueryError = unknown;

export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerSession>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerSession>>,
          TError,
          Awaited<ReturnType<typeof usersControllerSession>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerSession>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerSession>>,
          TError,
          Awaited<ReturnType<typeof usersControllerSession>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerSession>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Получить сессию пользователя
 */

export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof usersControllerSession>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getUsersControllerSessionQueryOptions(options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  return { ...query, queryKey: queryOptions.queryKey };
}
