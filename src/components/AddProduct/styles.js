import styled from "styled-components";

const FormContainer = styled.article`
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
    background-color: purple;
    color: #fff;
    margin: 10px;
    border: none;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;
`;

const ButtonReturn = styled(Button)`
    padding: 10px;
    box-sizing: border-box;
    background-color:rgb(59, 96, 197);
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 20px;
    cursor: pointer;
`;

const ButtonQuit = styled(Button)`
    padding: 10px;
    box-sizing: border-box;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 15px;
    cursor: pointer;
`

const CartButton = styled(Button)`
    background-color:rgb(59, 96, 197);
    font-size: 16px;
    padding: 10px 15px;
    text-align: center;
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`;

const ProductList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const ProductItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const ProductName = styled.p`
  flex-grow: 1;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin-right: 15px;
`;

const QuantityText = styled.span`
  margin-right: 15px;
  font-size: 1.2em;
`;

export { FormContainer, Input, 
        Button, CartButton, ButtonContainer, ProductList, 
        ProductImage, ProductItem, ProductName, ProductPrice,
        QuantityText, ButtonReturn, ButtonQuit };