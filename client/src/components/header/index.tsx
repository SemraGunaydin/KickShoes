import type { FC } from 'react'
import {GiHamburgerMenu as Menu} from "react-icons/gi"
import { Link } from 'react-router-dom'
import UserInfo from './user-info'



const Header:FC = () => {
  return (
	<header className="bg-white grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-md md:rounded-2xl xl:rounded-3xl mb-6 md:mb-7 xl:mb-8">
		
		<button className="md:hidden cursor-pointer text-xl">
			<Menu className="w-6 h-6"/>
		</button>

		<nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold">
			<Link to="/">New Season 🔥</Link>
			<Link to="/">Men</Link>
			<Link to="/">Women</Link>
			<Link to="/">Kids</Link>
		</nav>

		<Link to="/" className="flex justify-center items-center">
		<img src="/logo.svg" alt="logo" />
		</Link>

		<div className="flex justify-end items-center">
			<UserInfo/>
		</div>
	</header>
  )
}

export default Header;
