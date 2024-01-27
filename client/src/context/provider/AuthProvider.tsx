import { AuthContext } from "../AuthContext";
import { loginRequest, meRequest } from "../../api/auth.api";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode[] }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>(null);

  const signIn = async (data: any) => {
    try {
      const res = await loginRequest(data);
      console.log(res);
      setUser(res.data.message);
      setIsAuth(true);
      console.log(`Login successful!`);
      return res.data.message;
    } catch (error: any) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data))
        return setErrors(error.response.data);
      else setErrors(error.response.data);
    }
  };

  useEffect(() => {
    const storedJwt = Cookies.get("token");
    if (storedJwt) {
      meRequest()
        .then((res) => {
          setUser(res.data.message);
          setIsAuth(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
