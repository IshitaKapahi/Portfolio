import"./Applications.css"
import pic5 from './../../assets/pic5.jpeg';
export default function Applications(){
    return(
        <div className="app">
            <div>
                <strong className="text13">Applications</strong>
                <strong className="text14">View All</strong>
            </div> 
            <div className="KingsCollege"> 
            <div className="secondb">
               <span className="text15">Priority</span> 
               <span className="text16">Masters</span>
               <span className="text17">Spring 2022</span> 
                </div> 
                <div className="oranges"> 
        <div className="pictures">
        <img src={pic5} className="pic5"/>
        </div>
        <div className="block8">
            <span className="text18">Kings College London</span>
            <span className="text19">Masters in Data Science and <span className="text20">Visualization</span></span>     
            </div>
            </div>
            <span className="text21">Status</span>
            <span className="text22">i20 issued from university</span>
            <span className="text23">20 Sep 2022, 01:40 PM</span>
        </div>
        </div>
    )
}