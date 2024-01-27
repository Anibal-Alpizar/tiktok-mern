import { useAuth } from "../../hooks/useAuth";
import { loginCardProps } from "../../interfaces/login/loginCardProps";
import { Input, Button, Label } from "../ui";
import { useForm } from "react-hook-form";

const LoginCard = ({ onClose }: loginCardProps) => {
  const { handleSubmit, register } = useForm();
  const { signIn, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    await signIn(data);
  });

  return (
    <div className="text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-lg z-50">
      {loginErrors && (
        <div className="text-red-500 mb-4">
          {Array.isArray(loginErrors) ? (
            <ul>
              {loginErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          ) : (
            <p>{loginErrors.error}</p>
          )}
        </div>
      )}
      <h2 className="mb-4">Login</h2>
      <form onSubmit={onSubmit}>
        <Label htmlFor="username">
          Email:
          <Input
            className="mb-4 mt-2 w-full text-white bg-gray-800"
            type="text"
            {...register("email", { required: true })}
          />
        </Label>
        <br />
        <Label htmlFor="password">
          Password:
          <Input
            className="mb-4 mt-2 w-full text-white bg-gray-800"
            type="password"
            {...register("password", { required: true })}
          />
        </Label>
        <br />
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <Button onClick={onClose} type="button">
        Cerrar
      </Button>
    </div>
  );
};

export default LoginCard;
