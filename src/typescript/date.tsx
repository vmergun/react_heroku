import React, { MouseEventHandler } from 'react'


interface FormatDateProps {
    date: Date
  }
   

  const FormatDate = ({date}: {date :Date }) => (
    <div>{date.toLocaleString()}</div>
  )

  export default FormatDate