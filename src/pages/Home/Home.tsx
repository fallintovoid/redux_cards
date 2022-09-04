import React from 'react'
import FolderList from '../../ui/FoldersList/FolderList'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <h1 className='font-semibold text-lg mb-4'>Your card folders</h1>
      <FolderList/>
    </div>
  )
}

export default Home