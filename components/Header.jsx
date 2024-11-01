import React from 'react'

const Header = ({type = 'title', title, subText, user}) => {
  return (
    <div className=''>
        <h1 className=' text-[30px] font-bold'>{title} 
            {type === 'greeting' && <span className=' text-tealBlue'>&nbsp;{user}</span>}
        </h1>
        <p className=' text-[16px] font-medium text-gray-500'>{subText}</p>
    </div>
  )
}

export default Header