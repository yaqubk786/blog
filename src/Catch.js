import React from "react";
import './catch.css';
import building from './building.jpg';



function Catch(){
    return(<>
    <div className="catch">
        <div className="cd-1">
            <h3>Catch waves with an<br/>
            adventure guide.<span className="no1">1</span></h3>
            <p>Travel <span className="date">/ August 2020</span></p>
        </div>
        <hr></hr>
        <div className="cd-1">
        <img className="cd-img" src={building}></img>
        <span className="cd-aa">Catch waves with an <br/>adventure guide.
        <p>Travel / August 2020</p></span>
        <span className="two">2</span>
           
        </div>
        <hr></hr>
        <div className="cd-1">
        <img className="cd-img" src={building}></img>
        <span className="cd-aa">Catch waves with an <br/>adventure guide.
        <p>Travel / August 2020</p></span>
        <span className="two">3</span>
           
        </div>
        <hr></hr>
        <div className="cd-1">
        <img className="cd-img" src={building}></img>
        <span className="cd-aa">Catch waves with an <br/>adventure guide.
        <p>Travel / August 2020</p></span>
        <span className="two">4</span>
           
        </div>
       
    </div>
    
            
        
    </>)

}
export default Catch;
