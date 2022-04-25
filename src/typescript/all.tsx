import React, { MouseEventHandler } from 'react'
 import FormatDate from './date';

interface FormatIntProps {
    date: Date
  }
   

  const FormatNumber = ({number}: {number : number }) => (
    <><div>{number.toLocaleString()}</div><FormatDate date={new Date()}></FormatDate></>
    
  )

  export default FormatNumber