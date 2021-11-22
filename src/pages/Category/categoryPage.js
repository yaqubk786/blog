import React from "react";
import {
  bollywood,
  fitness,
  hollywood,
  technology,
  food,
} from "../../fakeData";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const params = useParams();
  let arr = [];

  if (params.id === "bollywood") {
    arr = bollywood;
  } else if (params.id === "hollywood") {
    arr = hollywood;
  } else if (params.id === "technology") {
    arr = technology;
  } else if (params.id === "fitness") {
    arr = fitness;
  } else if (params.id === "food") {
    arr = food;
  }
  return (
    <section className="className">
      <div className="container">
        {params.id} Page
        <div className="row">
          {arr.map((item) => {
            return (
              <div className="col-md-12" key={item.id}>
                <Link to={`/${params.id}/post/${item.id}`}>
                  <div className="ar-div1">
                    <img
                      className="ar-img"
                      src={process.env.PUBLIC_URL + "/media/building.jpg"}
                    />
                    <span className="ar-text">{item.title}</span>
                    <span>
                      <strong>Category:</strong> {item.category}
                    </span>
                    <span className="ar-txt1">{item.desc}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
