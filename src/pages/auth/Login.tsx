import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi login
    if (username === 'admin' && password === 'admin') {
      setMessage('Login success (mocked)')
    } else {
      setMessage('Invalid username or password')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100/50 px-4'>
      <div className='w-full max-w-md'>
        <div className='flex justify-center mb-6'>
          <img
            src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500'
            alt='Logo'
            className='w-16 h-16'
          />
        </div>
    
        <div className='bg-white p-8 shadow-lg rounded-2xl'>
          <div className='text-center mb-6'>
            <h1 className='text-2xl font-bold text-gray-700'>Login</h1>
            <p className='text-sm font-medium text-gray-500'>
              Login to your account to access the event schedule
            </p>
          </div>
    
          {message && (
            <Alert variant='default' className='mb-4'>
              <AlertTitle>Notice</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
    
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='text-[15px] font-medium text-gray-600' htmlFor="username">Username</label>
              <Input
                id='username'
                type='text'
                placeholder='Enter Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
    
            <div>
              <label className='text-[15px] font-medium text-gray-600' htmlFor="password">Password</label>
              <Input
                id='password'
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
    
            <div className="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
            </div>
    
            <Button variant='default' type='submit' className='w-full text-md'>
              Sign In
            </Button>
          </form>
    
          <div className='mt-4 text-center text-sm text-gray-600'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-indigo-600 hover:underline font-semibold'>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
