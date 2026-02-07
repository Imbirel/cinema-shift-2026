/* eslint-disable */
// @ts-nocheck

export interface PaginationMeta {
  /** Общее количество элементов во всех страницах */
  total: number;
  /** Текущий номер страницы (по умолчанию 1) */
  page: number;
  /** Количество элементов на странице (по умолчанию 10) */
  limit: number;
  /** Общее количество доступных страниц */
  totalPages: number;
}
