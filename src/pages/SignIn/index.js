import './signin.css';
import { useState } from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefacult();
        alert('Functionou!');
    }

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Sistema de login'></img>
                </div>

            <form onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                    <input type='text' placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Acessar</button>
            </form>


                <link to='/register'>Criar uma conta</link>
            </div>
        </div>
    );
}

export default SignIn;