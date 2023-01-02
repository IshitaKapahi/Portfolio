import"./IELTS.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
export default function IELTS(){
    return(
        <div className="IELTS">
            <div class="text12"><span>IELTS</span></div> 
        <div className="border4" />
        <div className="orange"> 
        <div style={{ width: "22%", height: "22%",fontWeight:"bolder" , marginTop:"0.9rem",marginLeft:"0.5rem"}} >
          <CircularProgressbar value={75} text={"7.5"} strokeWidth={10} styles={buildStyles({
            textSize: '22px',
            pathTransitionDuration: 0.5,
            pathColor: `#FF8C00`,
            textColor: '#1f1f1f',
            trailColor: '#f1f1f1',
           
          })} />
        </div>
        
        <div className="block3">

        <div className="block4">
                <span>120</span>
                <span className="b4">84</span>
                
                
            </div>
            <div className="block5">
                <span>Listening</span>
                <span className="b5">Speaking</span>
                
                
            </div>

            <div className="block6">
                <span>108</span>
                <span className="b6">108</span>
                
                
            </div>
            <div className="block5">
                <span>Reading</span>
                <span className="b7">Writing</span>
                
                
            </div>
                
            </div>
            
        
        </div>
        </div>
    )
}