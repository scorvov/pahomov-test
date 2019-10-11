export interface FormValues {
  email: string;
  password: string;
}

export interface FormProps {
  email?: string;
  password?: string;
  authRequest: (values: FormValues) => void;
}

export interface IAuthRequest {
  authRequest: (values: FormValues) => void;
}
