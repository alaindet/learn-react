import { SuccessResponse, ErrorResponse } from '@/common/types';

export function createResponse<T = any>(
  message: string,
  data?: T,
): SuccessResponse<T> {
  return { message, data: data ?? null, error: false };
}

export function createErrorResponse<T = any>(
  message: string,
  data?: T,
): ErrorResponse<T> {
  return { message, data: data ?? null, error: true };
}
