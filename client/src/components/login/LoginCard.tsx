import { Input, Button, Label } from "../ui";
import { LoginCardProps } from "../../interfaces/login/LoginCardProps";

const LoginCard = ({ onClose }: LoginCardProps) => {
  return (
    <div className="text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-lg z-50">
      <h2 className="mb-4">Login</h2>
      <form>
        <Label htmlFor="username">
          Usuario:
          <Input type="text" />
        </Label>
        <br />
        <Label htmlFor="password">
          Contraseña:
          <Input type="password" />
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
