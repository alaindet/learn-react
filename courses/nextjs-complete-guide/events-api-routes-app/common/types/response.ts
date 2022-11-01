export interface Response<T = any> {
  message: string;
  data: T | null;
  error: boolean;
}

export interface SuccessResponse<T = any> extends Response<T> {
  message: string;
  data: T | null;
  error: false;
}

export interface ErrorResponse<T = any> extends Response<T> {
  message: string;
  data: T | null;
  error: true;
}
