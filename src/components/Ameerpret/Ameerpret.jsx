import "./Ameerpret.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Ameerpret() {
    return (
        <div className="ameerpret">
             
            <div className="div">
            <div className="bluebar"></div>
            
                <div class="text">Ameerpet</div>
                <span class="User">18</span>
                <FontAwesomeIcon icon={faUser} className="fauser" />
                <div className="applications">
                    <span>APPLICATIONS</span>
                    <strong className="scolor">+5</strong>
                </div>
            </div>
            <div className="text2">
                <span>410</span>
            </div>
            <div className="border" />
            <div className="ameerpetcontainer">
                <div className="leads">
                    <span className="light">LEADS</span>
                    <span className="dark">34</span>
                    
                </div>
                <div className="border1" />
                <div className="students">
                    <span className="light">NEW STUDENTS</span>
                    <span className="dark">2</span>
                    
                </div>
                
            </div>
        </div>

    )
}