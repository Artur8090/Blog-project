import React from 'react'
import { Link, link, NavLink } from "react-router-dom"
export const Navbar = () => {
    const activeStyles = {
        color: 'white'
    }
    const isAuth = false;
    return (
        <div className="flex items-center justify-between py-4 w-full">
            <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm mr-6">
                E
            </span>
            {
                isAuth && (

                    <ul className="flex gap-8 flex-1">
                        <li><NavLink to={'/'} href="/" className="text-xs text-gray-400 hover:text-white" style={({ isActive }) => isActive ? activeStyles : undefined}>Главная</NavLink></li>
                        <li><NavLink to={'/posts'} href="/" className="text-xs text-gray-400 hover:text-white" style={({ isActive }) => isActive ? activeStyles : undefined}>Мои посты</NavLink></li>
                        <li><NavLink to={'/new'} href="/" className="text-xs text-gray-400 hover:text-white" style={({ isActive }) => isActive ? activeStyles : undefined}>Добавить пост</NavLink></li>
                    </ul>
                )}
            <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 ml-6">
                {isAuth ? (<button>Выйти</button>) : (
                    <Link to={'/login'}>Войти</Link>
                )}
            </div>

        </div>
    );
}
