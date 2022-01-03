import React from "react";
import './post.css';
import { useState } from "react";
// import "./latest.css";

// import More from "./components/More/More";
// import Boy from './public/media/boy.png';
import {
  bollywood,
  fitness,
  hollywood,
  technology,
  food,
} from "../../fakeData";
import { useParams, Link } from "react-router-dom";

export default function PostPage() {
  const [clap, setClap] = useState(0);

  const params = useParams();
  let arr = [];

  if (params.category === "bollywood") {
    arr = bollywood;
  } else if (params.category === "hollywood") {
    arr = hollywood;
  } else if (params.category === "technology") {
    arr = technology;
  } else if (params.category === "fitness") {
    arr = fitness;
  } else if (params.category === "food") {
    arr = food;
  }

const post = arr.find((post) => post.id == params.id);

console.log(post);
  return (
    <section>
      <div className="container">
        <h2 className="tech-head">{post.title}</h2>
        <p>{post.date}</p>
        {/* <button className="c-btn" onClick={() => setClap(clap+1)}><i onClick={() => setClap(clap+1)} class="fas fa-sign-language"></i></button>{clap} */}
        <span onClick={() => setClap(clap+1)} ><i class="fas fa-sign-language"></i></span> <span>{clap}</span><br/>
        <i class="fas fa-share-alt"></i><span>  share this article</span>
        <div className="tech-icons">
          <img
            className="boy-img"
            src={process.env.PUBLIC_URL + "/media/boy.png"}

          ></img>
          <span className="tech-name">Dimitry Nozhenko <br/> <span className="dates"> Jan 28 2019</span></span>
  
          <span>
            <i class="fab fa-facebook-square"></i>
          </span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <i class="fab fa-twitter-square"></i>
          </span>
          <span>
            <i class="fab fa-youtube"></i>
          </span>
        </div>


        <div className="post-text">
        <p><strong>Desc:</strong>{post.desc}</p>

        <p>{post.content}</p>
        </div>

        {/* <div className="aa"><span className="abcd">React</span>
        <span className="abcd">js</span>
        <span className="abcd">Animation</span>
        </div> */}

        <hr className="t-hrs"/>
        <div className="tech-i">
          <img
            className="boy-img"
            src={process.env.PUBLIC_URL + "/media/boy.png"}

          ></img> <span className="wrt">Written by</span>
          <span className="tech-name">Dimitry Nozhenko <br/> <span className="dates"> Jan 28 2019 / 10 min read</span></span>
  
        
        </div>
        <hr className="t-hrs"/>
        






        <div className="foot">
          <h3>More from siren</h3>
          <hr></hr>
          <section className="section mb-4 pb-4">
      <div className="container">
        {/* <h1 className="l-head">The Latest</h1> */}
        <hr className="l-hr"></hr>
        <div className="row">
          {[1, 2, 3].map((i) => {
            return (
              <div className="col-md-4 overflow-hidden">
                <div className="l-box shadow">
                  <img
                    className="lake-img"
                    src={process.env.PUBLIC_URL + "/media/lakehouse.jfif"}
                  ></img>
                  <h3>
                    Joshua Tree
                    <br /> Overnight Advemture
                  </h3>
                  <img className="boypic" src={process.env.PUBLIC_URL + "/media/boy.png"}></img>
                  <span>dimitri Nonzeko<br/>
                  <p className="p-time">Aug 10 /4 min read</p></span>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
        </div>

        

       
        

      </div>
    </section>
  );
}
