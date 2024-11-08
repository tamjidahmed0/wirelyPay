'use client'
import CountUp from 'react-countup';

const AnimationCounter = ({amount}) => {
  return (
   
        <CountUp
        duration={1}
        decimals={2}
        decimal = '.'
        prefix='$'
        end={amount}
         className=' max-sm:text-[18px]'
         />
   
  )
}

export default AnimationCounter