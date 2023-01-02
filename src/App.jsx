import Ameerpret from "./components/Ameerpret/ameerpret"
import ProfileScore from "./components/ProfileScore/ProfileScore"
import"./App.css"
import MailingAddress from "./components/MailingAddress/MailingAddress"
import IELTS from "./components/IELTS/IELTS"
import { useMediaQuery } from 'react-responsive'
import Applications from "./components/Applications/Applications"
function App(){
          
    return(
        <>
        <div className="portfolio">
        <h3 className="branches">Our Branches</h3>
        <div className="main1"> 
        <div className="flex" >
             <Ameerpret />
            <ProfileScore/>
            </div>
            <div className="flex">
            <MailingAddress/>
            <IELTS/> 
            </div> 
            </div>
            </div>
       
       
        
        
        
        
        </>
    
        

    )
   
}

export default App