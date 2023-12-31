/*
Tailwind Component
*/
'use client'

import { useState } from 'react'
import axios from 'axios'
/**Axios is nextjs' data fetching */
import { toast } from 'react-hot-toast'
// Notification system
import { useRouter } from "next/navigation"
import Link from 'next/link'

/** Frontend visuals for registering an account */

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        isModerator: false,
    })

    const { push } = useRouter();
    const router = useRouter();

    const registerUser = async (e) => {
        e.preventDefault();
        axios.post('api/register', data)
        .then(() => toast.success('User has been registered!'))
        .catch(() => toast.error('Something went wrong!'));
    }

    return (
      <>
      <title>Register</title>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/*<img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />*/}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Register For An Account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={registerUser}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value})}
                    className="text-jet block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value})}
                    className="text-jet block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Password
                  </label>
                  {/*
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value})}
                    className="text-jet block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cardinal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rustyred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow"
                  style={{}}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h3 className="mt-5 mb-0 text-center text-l font-bold tracking-tight">Already have an account? <Link className="text-cardinal hover:text-rustyred" href='/login'>Login</Link></h3>
          </div>
        </div>
      </>
    )
  }