import React from 'react'
import Mobile_Barusage from './Mobile_Barusage'
import Mobile_Lineusage from './Mobile_Lineusage'
import Header from '../Header'

const Mobile_usage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-[1500px]">
      <Header title="Mobile usage"/>

      
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1000px] px-4 mt-6">
          <Mobile_Barusage />
          <Mobile_Lineusage />
        </div>
     
    </div>
  )
}

export default Mobile_usage
