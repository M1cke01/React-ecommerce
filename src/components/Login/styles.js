import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f4f8;
`;

const LoginForm = styled.form`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    width: 100;
    max-width: 1500px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1.5px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 25px;
    margin: 0;
    text-align: center;
    padding-bottom: 10px;
`;

export { LoginContainer, LoginForm, Input, Button, Title, ErrorMessage };