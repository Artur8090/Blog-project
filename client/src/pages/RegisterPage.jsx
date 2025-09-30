import React from "react";
import { Link } from "react-router-dom";
export const RegisterPage = () => {
  return <form onSubmit={e => e.preventDefault()} className = "w-1/4 h-60 mx-auto mt-40">
  
      <h1 className="text-lg text-white text-center">Регистрация</h1>
      <label className="text-xs text-gray-400">
          Username:
          <input type="text" placeholder="Username" className="mt-1 text-black w-full bg-gray-400 px-2 py-1 text-xs rounded-sm outline-none placeholder:text-gray-400"/> 
      </label>
          <label className="text-xs text-gray-400">
          Password:
          <input type="text" placeholder="Password" className="mt-1 text-black w-full bg-gray-400 px-2 py-1 text-xs rounded-sm outline-none placeholder:text-gray-400"/> 
      </label>
  
      <div className="flex gap-8 justify-center mt-4">
          <button type="submit" className="flex justify-center bg-gray-600 items-center text-xs text-white rounder-sm py-w px-4">
                Зарегистрироваться
          </button>
          <Link to='/login' className='flex justify-center items-center text-xs text-white'>Уже Зарегистрированы?</Link>
      </div>
    </form>;;
}