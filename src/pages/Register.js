import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Container, Form, Button, Input, ErrorText } from "../styles/styles";

const registerSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirma tu contraseña"),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Usuario registrado:", data);
  };

  return (
    <Container>
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre:</label>
        <Input type="text" {...register("name")} />
        <ErrorText>{errors.name?.message}</ErrorText>

        <label>Email:</label>
        <Input type="email" {...register("email")} />
        <ErrorText>{errors.email?.message}</ErrorText>

        <label>Contraseña:</label>
        <Input type="password" {...register("password")} />
        <ErrorText>{errors.password?.message}</ErrorText>

        <label>Confirmar Contraseña:</label>
        <Input type="password" {...register("confirmPassword")} />
        <ErrorText>{errors.confirmPassword?.message}</ErrorText>

        <Button type="submit">Registrarse</Button>
      </Form>
      <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </Container>
  );
};

export default Register;
