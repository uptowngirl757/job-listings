import React from 'react'
import assets from './assets/assets'
const JobComponent = () => {
  return (
    <article className="relative bg-white w-full shadow-xl shadow-gr-900/10 p-4 pt-10  min-[987px]:p-4 rounded-md flex justify-between gap-10 min-[987px]:gap-3 items-start min-[987px]:items-center border-l-6 border-gr-400 flex-col min-[987px]:flex-row">
      <div className="flex gap-3 items-center">
        <img
          src={assets.photosnapIcon}
          alt=""
          className="max-[987px]:w-13 max-[987px]:h-13 max-[987px]:absolute max-[987px]:top-0 max-[987px]:-translate-y-1/2 max-[987px]:left-4 min-[987px]:relative"
        />
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center">
            <span className="font-semibold text-gr-400 ">Photosnap</span>
            <span className="inline-flex items-center justify-center bg-gr-400 text-white uppercase px-2 py-1 text-sm font-semibold rounded-full">
              New!
            </span>
            <span className="inline-flex text-center items-center justify-center bg-gr-900 text-white uppercase px-2 py-1 text-sm font-semibold rounded-full">
              featured
            </span>
          </div>
          <h2 className="font-bold text-lg transition-all duration-300 hover:text-gr-400 cursor-pointer">
            Senior Frontend Developer
          </h2>
          <div className="flex items-center gap-4 text-gra-400">
            <span>5d ago</span>
            <span className="w-1 h-1 bg-gra-400 rounded-full"></span>
            <span>Contract</span>
            <span className="w-1 h-1 bg-gra-400 rounded-full"></span>
            <span>USA only</span>
          </div>
        </div>
      </div>
      <div className="flex-wrap min-[987px]:flex-nowrap  flex gap-3">
        {['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'].map((item, i) => (
          <span
            className="text-gr-400 bg-gr-400/10 cursor-pointer rounded-sm py-1 px-2 font-semibold transition-all duration-300 hover:text-white hover:bg-gr-400"
            key={i}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

export default JobComponent
