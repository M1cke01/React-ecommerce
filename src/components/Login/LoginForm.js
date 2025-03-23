import React from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type= "submit">Login</button>
        </form>
    );
};

export default LoginForm;