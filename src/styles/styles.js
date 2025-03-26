import styled from 'styled-components';

const ProductContainer = styled.main`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 25px;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const AppHeader = styled.header`
    padding: 25px;
    box-sizing: border-box;
    background-color: #215455;
    color: white;
`;

const HeaderTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
`;

export { ProductContainer, AppHeader, HeaderTitle }