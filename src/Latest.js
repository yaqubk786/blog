import React from "react";
import './latest.css';
import lakehouse from './lakehouse.jfif';

function Latest(){
    return(<>
    <h1 className="l-head">The Latest</h1>
    <hr className="l-hr"></hr>
    <div className="l-div1">

    <div className="l-box">
        <img className="lake-img" src={lakehouse}></img>
        <h3 >Joshua Tree<br/> Overnight Advemture</h3>
        <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="l-box">
    <img className="lake-img" src={lakehouse}></img>
        <h3 >Joshua Tree<br/> Overnight Advemture</h3>
        <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="l-box">
    <img className="lake-img" src={lakehouse}></img>
        <h3 >Joshua Tree<br/> Overnight Advemture</h3>
        <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
        
            
     </div>


    </>)
}
export default Latest;