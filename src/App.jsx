import React, { useState } from 'react'
import JobComponent from './JobComponent'
import dataJson from '../data.json'
import removeIcon from './assets/icon-remove.svg'
const App = () => {
  const [data, setData] = useState(dataJson)
  const [activeFilters, setActiveFilters] = useState([])

  const removeFilter = tag => {
    setActiveFilters(activeFilters.filter(f => f !== tag))
  }

  const clearAllFilters = () => {
    setActiveFilters([])
  }
  const handletagClick = tag => {
    if (!activeFilters.includes(tag)) {
      return setActiveFilters([...activeFilters, tag])
    }
  }
  const filteredData = data.filter(jobListing => {
    if (activeFilters.length === 0) return true
    return activeFilters.every(filter => {
      return (
        jobListing.role === filter ||
        jobListing.level === filter ||
        jobListing.languages.includes(filter) ||
        jobListing.tools.includes(filter)
      )
    })
  })
  return (
    <div className="bg-gr-50">
      <div className="bg-gr-400  h-42 bg-[url('/bg-header-mobile.svg')] sm:bg-[url('/bg-header-desktop.svg')] bg-cover bg-center bg-no-repeat relative">
        {activeFilters.length > 0 && (
          <ul
            className="max-w-300 absolute bottom-0 translate-y-1/2 translate-x-1/2
 right-1/2 mx-auto bg-white w-[95%] shadow-xl shadow-gr-900/10 p-4 rounded-md  flex items-center justify-between gap-4 "
          >
            <div className="flex gap-2 flex-wrap">
              {activeFilters.map((filter, i) => (
                <li
                  className="flex items-center justify-between gap-1 text-gr-400 rounded-sm bg-gr-400/30 font-semibold text-sm overflow-hidden"
                  key={i}
                >
                  <span className="p-1 px-2">{filter}</span>

                  <button
                    className="bg-gr-400 p-2 shrink-0 cursor-pointer transition-all duration-300 hover:bg-gr-900"
                    onClick={() => removeFilter(filter)}
                  >
                    <img src={removeIcon} alt="" />
                  </button>
                </li>
              ))}
            </div>
            <div
              className="text-gr-400 font-semibold transition-all duration-300 hover:underline hover:underline-offset-1 cursor-pointer"
              onClick={clearAllFilters}
            >
              Clear
            </div>
          </ul>
        )}
      </div>

      <div className="max-w-300 p-5 mx-auto mt-17 flex flex-col items-center justify-center gap-10 min-[987px]:gap-5">
        {filteredData.map(jobListing => (
          <JobComponent
            key={jobListing.id}
            logo={jobListing.logo}
            company={jobListing.company}
            position={jobListing.position}
            postedAt={jobListing.postedAt}
            contract={jobListing.contract}
            location={jobListing.location}
            entails={[
              jobListing.role,
              jobListing.level,
              ...jobListing.languages,
            ]}
            isNew={jobListing.new}
            isFeatured={jobListing.featured}
            onTagClick={handletagClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App
