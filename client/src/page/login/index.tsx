import type {  FC } from 'react'
import {Formik, Form} from "formik";
import { initialLoginValues } from '../../utils/constants';
import type { ILoginValues } from '../../types';
import Input from '../../components/form/input';
import { Link } from 'react-router-dom';
import { LoginSchema } from '../../utils/schema';
import useAuth from '../../service/auth';





const Login:FC = () => {
	const {login} = useAuth();



	const onSubmit = (values:ILoginValues) => {
		login.mutate(values);
	}
  return (
	<div className="min-h-screen flex-1 flex flex-col justify-center">
	  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
		<img 
		src="/logo.svg" 
		alt="KICKS"
		className="mx-auto h-10 w-auto" />
		<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-500">Log in or create an account </h2>
	  </div>

	  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<Formik 
		initialValues={initialLoginValues}
		validationSchema={LoginSchema}
		onSubmit={onSubmit}>
			<Form className="space-y-8">
				<Input label="Email" name="email" type="email"/>
				<Input label="Password" name="password" type="password"/>
				

				<div>
					<button 
					type="submit" 
					disabled={login.isPending}
					className="disabled:opacity-50 flex w-full justify-center rounded-md bg-indigo-600  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer">Login</button>
				</div>
			</Form>
		</Formik>

		<p className="mt-10 text-center text-sm/6 text-gray-500"> Don't have an account?{""} <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</Link>
		</p>
	  </div>
	</div>
  )
}

export default Login;
