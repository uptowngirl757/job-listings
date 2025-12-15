import React from 'react'
import JobComponent from './JobComponent'
const App = () => {
  return (
    <div className="bg-gr-50">
      <div className="bg-gr-400  h-42 bg-[url('/bg-header-mobile.svg')] sm:bg-[url('/bg-header-desktop.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-300 px-5 mx-auto mt-17 flex flex-col items-center justify-center gap-10 min-[987px]:gap-5">
        <JobComponent />
        <JobComponent />
        <JobComponent />
      </div>
    </div>
  )
}

export default App
