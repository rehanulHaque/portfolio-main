import React from 'react'

const TagComp = ({name}) => {
  return (
    <div className='px-4 py-2 bg-gray-200 text-black w-fit text-xs rounded-md mr-2 whitespace-nowrap inline'>
        {name}
    </div>
  )
}

export default TagComp
