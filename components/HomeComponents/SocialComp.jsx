import React from 'react'
import Link from 'next/link'

const SocialComp = ({url, icon}) => {
  return (
    <Link href={url} target='_blank' className='mr-2 text-2xl inline-block w-fit'>{icon}</Link>
  )
}

export default SocialComp
