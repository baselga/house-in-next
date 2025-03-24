
export type FormState = {
  message?: string;
  isSuccess: boolean;  
  issues?: { path: string | number; message: string }[];
};
