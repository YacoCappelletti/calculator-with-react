import { useState, useEffect } from "react";



export const Display = ({displayData = ''}) => {

  
  
  
  return (
    <div className="display-container">
      <div className="display">
          <p>{displayData}</p>
      </div>  
    </div>
  )
}
