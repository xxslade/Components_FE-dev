import React from 'react'
import DynamicCompiler from './DynamicCompiler'

const AllCompilers = ({ templateType }) => {
    const allCompilers = Object.entries(templateType).map(([key, code]) => (
        <div
  key={key}
  className="flex justify-center items-center bg-white dark:bg-[#3E0B17] py-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 
             transition-all duration-300 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 group m-5"
>
  <div className="w-full max-w-4xl">
    <DynamicCompiler defaultCode={code} />
  </div>
</div>

    ))
    return (
        <div>
            {allCompilers}
        </div>
    )
}

export default AllCompilers
