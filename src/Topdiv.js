import React from "react";
import './topdiv.css';
import mountain from './mountain.jpg';
import flower from './flowermount.jpg';


function Topdiv(){
    return(<>
        <div className="topdiv">
            <img className="mount-pic" src={mountain}></img>
            {/* <h2 className="text-mount">TITLE OF VERTICAL GALLERY</h2> */}
            <span><img className="flower" src={flower}></img></span>
            <img className="flower-2" src={flower}></img>

        </div>
    </>)
}
export default Topdiv;