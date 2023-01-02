import"./ProfileScore.css"
import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
export default function ProfileScore(){
  const [progress,setProgress]=useState(85)
  const [size,setSize]=useState(80)
  const [thick,setThick]=useState(5)
    return(
        <div className="profilescore">
            <div className="text1"><span>Profile Score</span></div>
            <div style={{ width: "40%", height: "40%",fontWeight: 700,marginLeft:"5.5rem" }}>
      <CircularProgressbar value={80} text={"80%"} strokeWidth={9} styles={buildStyles({
        textSize: '18px',
        pathColor: `#228B22`,
        textColor: '#1f1f1f',
        trailColor: '#aaaaaaaa',
      })} />
      </div>
            <div className="text5"><span>You have acheived this</span><span className="text6">month's goal</span></div>
            <div className="text7"><span>Congratulations 🥳</span></div>
            
        </div>
    )
}