import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Background kotak */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-5 gap-0 w-full max-w-[768px] aspect-[8/5]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="border border-gray-100/50" />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <Navbar>
        <div className="flex items-center space-x-6">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-10"
            />
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </Navbar>

      <div className='flex min-h-screen items-center'>
        <main className="relative z-10 pt-24 px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">What's new?</span>
              <span className="text-gray-500 text-sm font-medium">Demo Application - Beta Version</span>
            </div>
  
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Deploy to the Web <br /> Application Schedule
            </h1>
  
            <p className="text-gray-500 text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
  
            <div className="flex space-x-4">
              <Button asChild>
                <Link to="/information">Learn More</Link>
              </Button>
            </div>
          </div>
  
          <div className="hidden md:flex justify-center">
            <div className="border border-gray-200 rounded-2xl shadow-xl overflow-hidden bg-white p-4 w-full max-w-md">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard preview"
                className="rounded-md"
              />
            </div>
          </div>
        </main>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="absolute left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

export default HomePage
