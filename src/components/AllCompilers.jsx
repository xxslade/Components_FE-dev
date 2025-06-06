import React from 'react'
import DynamicCompiler from './DynamicCompiler'

const AllCompilers = ({ templateType }) => {
    const allCompilers = Object.entries(templateType).map(([key, code]) => (
        <div
            key={key}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition duration-300"
        >
            <DynamicCompiler defaultCode={code} />
        </div>
    ))
    return (
        <div>
            {allCompilers}
        </div>
    )
}

export default AllCompilers
