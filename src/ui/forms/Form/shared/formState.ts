
export type FormState<T = undefined> = {
  message?: string;
  data?: T | undefined,
  isSuccess: boolean;
  error?: {
    issues?: { path: string | number; message: string }[];
  }
};
