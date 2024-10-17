import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='bg-black text-red-800 flex justify-between'>
            <h1 className='text-2xl ml-4'>
              Header</h1>
            <ul className='flex gap-4 m-4'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Cources</a>
            </ul>
        </div>
    </div>
  )
}

export default Header