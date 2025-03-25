import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Form, Button, Input, ErrorText } from "../styles/styles";

const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("El email es obligatorio"),
    password: yup.string().min(6, "Minimo 6 caraacteres").required("La contraseña es obligatoria"),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
    };

    return (
        <Container>
            <h2>Iniciar sesión</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label>Email:</label>
                <Input type="email" {...register("email")} />
                <ErrorText>{errors.email?.message}</ErrorText>

                <label>Contraseña:</label>
                <Input type="password" {...register("password")} />
                <ErrorText>{errors.password?.message}</ErrorText>
                
                <Button type="submit">Ingresar</Button>
            </Form>
        </Container>
    );
};

export default Login;