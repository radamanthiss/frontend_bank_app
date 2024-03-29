"use client"
import { UserInfoContext } from '@/context/UserContext';
import { login } from '@/services/auth';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const { user, setUser } = useContext(UserInfoContext);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleSubmit = async () => {
    try {
      const data = await login(email, password);
      const vals = data[0];
      localStorage.setItem("info", JSON.stringify(vals));
      setUser(vals.user);
      router.replace('/');
      setLoading(false);
    } catch (error: any) {
      console.error('Login failed', error);
    }
  };
   
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" name="email" id="email" value={email} onChange={(event) => {
                  setEmail(event.target.value)
                }} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" value={password} onChange={(event) => {
                  setPassword(event.target.value)
                }} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => { handleSubmit() }} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline  text-blue-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
