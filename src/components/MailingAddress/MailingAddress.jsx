import"./MailingAddress.css"
export default function MailingAddress(){
    return(
        <div className="mailing">
            <div className="text8"><span>Mailing Address</span></div>
            <div className="text9"><span>Address Line</span></div>
            <div className="text10"><span>Level 1 Phoenix Building, Beside Genpact</span>
            <span className="text11">Road, Uppal</span>
            <div className="block">
                <span>City</span>
                <span className="b1">State</span>
                <span>Country</span>
                
            </div>
            <div className="block2">
                <span>Hyderabad</span>
                <span className="b2">Telangana</span>
                <span className="b3">India</span>
                
            </div>
            <div className="block">
                <span>Pincode</span>
            </div>
            <div className="block2">
                <span>500039</span>
                
            </div>
            </div>
        </div>
    )
}