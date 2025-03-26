import styled from "styled-components";

const FormContainer = styled.article`
    display: flex;
    margin-bottom: 25px;
`;

const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    box-sizing: border-box;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 7px;
    cursor: pointer;
`;

const CartButton = styled(Button)`
    background-color: #28a745;
    font-size: 16px;
    padding: 10px 15px;
`

export { FormContainer, Input, Button, CartButton };