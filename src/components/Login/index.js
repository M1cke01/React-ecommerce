import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../AuthSlice";
import { Button, Input, LoginContainer, LoginForm, Title, ErrorMessage } from "./styles";

const users = [
    { email: "user1@gmail.com", password: "1111"},
    { email: "user2@gmail.com", password: "2222"},
    { email: "user3@gmail.com", password: "3333"},
]

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            setError("");
            dispatch(login({ email }));
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <Title>Login</Title>
                <Input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;