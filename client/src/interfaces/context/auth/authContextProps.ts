//TODO: add types
export interface authContextProps {
  user: any;
  isAuth: boolean;
  errors: any;
  signIn: (data: any) => void;
}
