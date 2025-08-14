import React from 'react'
import { Link, useParams } from 'react-router'


export const meta = () => ([
    { title: 'Resumind | Review ' },
    { name: 'description', content: 'Detailed overview of your resume' },
])

const resume = () => {
    const { id } = useParams();
  return (
  <main className='!pt-0'>
        <nav className='resume-nav'>
            <Link to="/" className='back-button'>
            <img src="/icons/back.svg" alt="logo" className='w-2.5 h-2.5' />
            <span className='text-gray-800 text-sm font-semibold'>Back to Homepage</span>
            </Link>
        </nav>
        <div className='flex flex-row w-full max-lg:flex-col-reverse'>
             <section className='feedback-section '>
                {imageUrl && resumeUrl && (
                    <div className='animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit'>

                    </div>
                )}
                
                </section>   
        </div>
  </main>
  )
}

export default resume
