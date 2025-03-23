import React, { useState } from "react";

const CheckoutForm = () => {
    const [adress, setAdress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Purchase confirmed');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Dirección de envío"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
            />
            <select 
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
            >
                <option value="">Selecciona el método de pago</option>
                <option value="creditCard">Tarjeta de crédito</option>
                <option value="debitCard">Tarjeta de débito</option>
            </select>
            <button type="submit">Confirmar compra</button>
        </form>
    );
};

export default CheckoutForm;