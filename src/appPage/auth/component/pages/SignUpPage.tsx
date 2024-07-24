'use client';

import { useRegisterMutation } from '@/redux/api/auth';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import scss from "./SignUpPage.module.scss"
import Link from 'next/link';
interface IFormInput {
	email: string;
	password: string;
	username: string;
	photo: string;
}
const SignUpPage = () => {
	const { register, handleSubmit } = useForm<IFormInput>();

	const [registerMutation] = useRegisterMutation();
	const router = useRouter();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const { data: responseData, error } = await registerMutation(data);

			if (responseData) {
				localStorage.setItem('accessToken', JSON.stringify(responseData.accessToken ));
				router.push('/');
			} else {
				const errorMessage = error as { data: { message: string } };
				alert(errorMessage.data.message);
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<section className={scss.section}>
			<h1 className={scss.text_h1}>Sign-Up Page</h1>
			<form className={scss.from_btn} onSubmit={handleSubmit(onSubmit)}>
				<input
					className={scss.input_btn}
					placeholder="email"
					type="text"
					{...register('email', {
						required: true,
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
					})}
				/>
				<input
					className={scss.input_btn}
					placeholder="password"
					type="text"
					{...register('password', { required: true })}
				/>
				<input
					className={scss.input_btn}
					placeholder="username"
					type="text"
					{...register('username', { required: true })}
				/>
				<input
					className={scss.input_btn}
					placeholder="photo"
					type="text"
					{...register('photo', { required: true })}
				/>
				<button className={scss.btn_create} type="submit">
					Регистрация
				</button>
				 
				 <h1>Забыде парол</h1>
         <Link href="/auth/sign-in">
         <p>У меня есть Акаунть</p>
         </Link>
			</form>
		</section>
	);
};
export default SignUpPage;
//