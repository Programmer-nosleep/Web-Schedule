import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import GridBox from '@/components/GridBox'

const NotFoundPage: React.FC = () => {
  return (
    <div className='relative min-h-screen flex justify-center bg-gray-100/50'>
      <GridBox />
      <main className="relative grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a> */}
            {/* <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a> */}
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <Link to="/">Go back home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFoundPage