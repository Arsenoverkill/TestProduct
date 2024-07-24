"use client";
import { useLoginMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./SignInPage.module.scss";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
}

const SigninPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const [loginMutation] = useLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { data: responseData, error } = await loginMutation(data);

      if (responseData) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(responseData.accessToken)
        );
        console.log(responseData);	

        router.push("/");
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
      <h1 className={scss.text_h1}>Sign-In Page</h1>
      <form className={scss.from_btn} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={scss.input_btn}
          placeholder="email"
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        <input
          className={scss.input_btn}
          placeholder="password"
          type="text"
          {...register("password", { required: true })}
        />
        <button className={scss.btn_create} type="submit">
          Вход
        </button>
		<p>у меня нету Акаунты</p>
		<Link href="/auth/sign-up">
		<p>Регистер</p>
		</Link>
      </form>
    </section>
  );
};

export default SigninPage;
