import { useState } from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefacult();
        alert('Funcionou!');
    }

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Sistema de login'></img>
                </div>

            <form onSubmit={handleSubmit}>
                    <h1>Cadastrar uma conta</h1>
                    <input type='text' placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />

                    <input type='text' placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>


                <Link to='/register'>Possui uma conta? Clique aqui!</Link>
            </div>
        </div>
    )
}

export default SignUp;