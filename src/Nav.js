import React from "react";


function Nav(){
    return(
        <>
            <div className="navbar">
                <span className="spans home">Home</span>
                <span className="spans boll">Bollywood</span>
                <span className="spans tech">Technology</span>
                <span className="spans holl">Hollywood</span>
                <span className="spans fit">Fitness</span>
                <span className="spans food">Food</span>
            </div>
            <hr className="nav-hr"></hr>
        </>
    );
}
export default Nav;