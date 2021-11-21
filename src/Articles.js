import React from "react";
import './articles.css';
import building from './building.jpg'

function Articles(){
    return(<>
    <h1 className="ar-head">Latest Articles</h1>
    <hr className="ar-hr"></hr>
    <hr className="ar-hr1"></hr>
    <div className="ar-div1">
    <img className="ar-img" src={building}></img>
    <span className="ar-text">Catch waves with <br/> an adventure guide</span>
    <span className="ar-txt1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> 
    Aenean commodo ligula eget dolor.
     </span>

    </div>
    <hr className="ar-hr1"></hr>
    <div className="ar-div1">
    <img className="ar-img" src={building}></img>
    <span className="ar-text">Catch waves with <br/> an adventure guide</span>
    <span className="ar-txt1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> 
    Aenean commodo ligula eget dolor.
     </span>

    </div>
    <hr className="ar-hr1"></hr>
    <div className="ar-div1">
    <img className="ar-img" src={building}></img>
    <span className="ar-text">Catch waves with <br/> an adventure guide</span>
    <span className="ar-txt1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> 
    Aenean commodo ligula eget dolor.
     </span>

    </div>
    <div><i class="fas fa-arrow-down"></i> <span>Load More</span></div>

    </>);
}
export default Articles;