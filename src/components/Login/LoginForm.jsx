import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
	const [form, setForm] = useState({});

	const handleSubmit = e => {
		e.preventDefault();
		alert('Enviando...');
	};

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form_login}>
			<input
				type='email'
				placeholder='Correo Electronico'
				className={styles.input_login}
				name='email_login'
				value={form.email_login || ''}
				onChange={handleChange}
			/>
			<input
				type='password'
				placeholder='Contraseña'
				className={styles.input_login}
				name='password_login'
				value={form.password_login || ''}
				onChange={handleChange}
			/>
			<div className={styles.forgot_login}>
				<Link to={'/reset-password'}>¿Olvidaste tu contraseña?</Link>
			</div>

			<Link to={'/admin/admin'}>
				<input
					type='submit'
					value='Iniciar Sesión'
					className={styles.submit_login}
				/>
			</Link>

			<div className={styles.signin_login}>
				<p>
					¿Aún no estás registrado? <Link to={'/'}>Registrate</Link>
				</p>
			</div>
		</form>
	);
};

export default LoginForm;
