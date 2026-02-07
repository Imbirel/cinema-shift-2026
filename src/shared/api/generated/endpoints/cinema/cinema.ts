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
  BaseResponse,
  CancelCinemaOrderDto,
  CinemaOrdersResponse,
  CreateCinemaPaymentDto,
  FilmResponse,
  FilmsResponse,
  PaymentResponse,
  ScheduleResponse,
} from '../../models';

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

/**
 * @summary Получить список фильмов
 */
export const cinemaControllerGetCinemaToday = (
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<FilmsResponse>(
    { url: `/api/cinema/films`, method: 'GET', signal },
    options,
  );
};

export const getCinemaControllerGetCinemaTodayQueryKey = () => {
  return [`/api/cinema/films`] as const;
};

export const getCinemaControllerGetCinemaTodayQueryOptions = <
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof instance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCinemaControllerGetCinemaTodayQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>
  > = ({ signal }) => cinemaControllerGetCinemaToday(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CinemaControllerGetCinemaTodayQueryResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>
>;
export type CinemaControllerGetCinemaTodayQueryError = unknown;

export function useCinemaControllerGetCinemaToday<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
  TError = unknown,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetCinemaToday<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetCinemaToday<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
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
 * @summary Получить список фильмов
 */

export function useCinemaControllerGetCinemaToday<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaToday>>,
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
  const queryOptions = getCinemaControllerGetCinemaTodayQueryOptions(options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  return { ...query, queryKey: queryOptions.queryKey };
}

/**
 * @summary Получить фильм
 */
export const cinemaControllerGetFilm = (
  filmId: string,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<FilmResponse>(
    { url: `/api/cinema/film/${filmId}`, method: 'GET', signal },
    options,
  );
};

export const getCinemaControllerGetFilmQueryKey = (filmId: string) => {
  return [`/api/cinema/film/${filmId}`] as const;
};

export const getCinemaControllerGetFilmQueryOptions = <
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof instance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCinemaControllerGetFilmQueryKey(filmId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof cinemaControllerGetFilm>>
  > = ({ signal }) => cinemaControllerGetFilm(filmId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!filmId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CinemaControllerGetFilmQueryResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerGetFilm>>
>;
export type CinemaControllerGetFilmQueryError = unknown;

export function useCinemaControllerGetFilm<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
  TError = unknown,
>(
  filmId: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetFilm>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetFilm<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetFilm>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetFilm<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
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
 * @summary Получить фильм
 */

export function useCinemaControllerGetFilm<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilm>>,
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
  const queryOptions = getCinemaControllerGetFilmQueryOptions(filmId, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  return { ...query, queryKey: queryOptions.queryKey };
}

/**
 * @summary Получить расписание фильма
 */
export const cinemaControllerGetFilmSchedule = (
  filmId: string,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<ScheduleResponse>(
    { url: `/api/cinema/film/${filmId}/schedule`, method: 'GET', signal },
    options,
  );
};

export const getCinemaControllerGetFilmScheduleQueryKey = (filmId: string) => {
  return [`/api/cinema/film/${filmId}/schedule`] as const;
};

export const getCinemaControllerGetFilmScheduleQueryOptions = <
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof instance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getCinemaControllerGetFilmScheduleQueryKey(filmId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>
  > = ({ signal }) =>
    cinemaControllerGetFilmSchedule(filmId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!filmId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CinemaControllerGetFilmScheduleQueryResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>
>;
export type CinemaControllerGetFilmScheduleQueryError = unknown;

export function useCinemaControllerGetFilmSchedule<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
  TError = unknown,
>(
  filmId: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetFilmSchedule<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetFilmSchedule<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
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
 * @summary Получить расписание фильма
 */

export function useCinemaControllerGetFilmSchedule<
  TData = Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
  TError = unknown,
>(
  filmId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetFilmSchedule>>,
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
  const queryOptions = getCinemaControllerGetFilmScheduleQueryOptions(
    filmId,
    options,
  );

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  return { ...query, queryKey: queryOptions.queryKey };
}

/**
 * @summary Оплатить билеты
 */
export const cinemaControllerCreateCinemaPayment = (
  createCinemaPaymentDto: CreateCinemaPaymentDto,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<PaymentResponse>(
    {
      url: `/api/cinema/payment`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createCinemaPaymentDto,
      signal,
    },
    options,
  );
};

export const getCinemaControllerCreateCinemaPaymentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>,
    TError,
    { data: CreateCinemaPaymentDto },
    TContext
  >;
  request?: SecondParameter<typeof instance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>,
  TError,
  { data: CreateCinemaPaymentDto },
  TContext
> => {
  const mutationKey = ['cinemaControllerCreateCinemaPayment'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>,
    { data: CreateCinemaPaymentDto }
  > = (props) => {
    const { data } = props ?? {};

    return cinemaControllerCreateCinemaPayment(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CinemaControllerCreateCinemaPaymentMutationResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>
>;
export type CinemaControllerCreateCinemaPaymentMutationBody =
  CreateCinemaPaymentDto;
export type CinemaControllerCreateCinemaPaymentMutationError = unknown;

/**
 * @summary Оплатить билеты
 */
export const useCinemaControllerCreateCinemaPayment = <
  TError = unknown,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>,
      TError,
      { data: CreateCinemaPaymentDto },
      TContext
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof cinemaControllerCreateCinemaPayment>>,
  TError,
  { data: CreateCinemaPaymentDto },
  TContext
> => {
  return useMutation(
    getCinemaControllerCreateCinemaPaymentMutationOptions(options),
    queryClient,
  );
};
/**
 * @summary Получить заказы
 */
export const cinemaControllerGetCinemaOrders = (
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<CinemaOrdersResponse>(
    { url: `/api/cinema/orders`, method: 'GET', signal },
    options,
  );
};

export const getCinemaControllerGetCinemaOrdersQueryKey = () => {
  return [`/api/cinema/orders`] as const;
};

export const getCinemaControllerGetCinemaOrdersQueryOptions = <
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof instance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCinemaControllerGetCinemaOrdersQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>
  > = ({ signal }) => cinemaControllerGetCinemaOrders(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CinemaControllerGetCinemaOrdersQueryResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>
>;
export type CinemaControllerGetCinemaOrdersQueryError = unknown;

export function useCinemaControllerGetCinemaOrders<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
  TError = unknown,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetCinemaOrders<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
          TError,
          Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCinemaControllerGetCinemaOrders<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
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
 * @summary Получить заказы
 */

export function useCinemaControllerGetCinemaOrders<
  TData = Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof cinemaControllerGetCinemaOrders>>,
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
  const queryOptions = getCinemaControllerGetCinemaOrdersQueryOptions(options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  return { ...query, queryKey: queryOptions.queryKey };
}

/**
 * @summary Отменить заказ
 */
export const cinemaControllerCancelCinemaOrder = (
  cancelCinemaOrderDto: CancelCinemaOrderDto,
  options?: SecondParameter<typeof instance>,
  signal?: AbortSignal,
) => {
  return instance<BaseResponse>(
    {
      url: `/api/cinema/orders/cancel`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: cancelCinemaOrderDto,
      signal,
    },
    options,
  );
};

export const getCinemaControllerCancelCinemaOrderMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>,
    TError,
    { data: CancelCinemaOrderDto },
    TContext
  >;
  request?: SecondParameter<typeof instance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>,
  TError,
  { data: CancelCinemaOrderDto },
  TContext
> => {
  const mutationKey = ['cinemaControllerCancelCinemaOrder'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>,
    { data: CancelCinemaOrderDto }
  > = (props) => {
    const { data } = props ?? {};

    return cinemaControllerCancelCinemaOrder(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CinemaControllerCancelCinemaOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>
>;
export type CinemaControllerCancelCinemaOrderMutationBody =
  CancelCinemaOrderDto;
export type CinemaControllerCancelCinemaOrderMutationError = unknown;

/**
 * @summary Отменить заказ
 */
export const useCinemaControllerCancelCinemaOrder = <
  TError = unknown,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>,
      TError,
      { data: CancelCinemaOrderDto },
      TContext
    >;
    request?: SecondParameter<typeof instance>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof cinemaControllerCancelCinemaOrder>>,
  TError,
  { data: CancelCinemaOrderDto },
  TContext
> => {
  return useMutation(
    getCinemaControllerCancelCinemaOrderMutationOptions(options),
    queryClient,
  );
};
