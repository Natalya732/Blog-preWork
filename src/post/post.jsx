import "./post.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <Link className="link" to="/post/:postId">
        <img
          className="postImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBKgoZd3fiQk1gnqXSn_MQYIjonqK48IZZg&usqp=CAUU"
          alt=""
        />
        <div className="postInfo">
          <div className="postCoffeee">
            <span className="postCoffee">Music</span>
            <span className="postCoffee">Life</span>
          </div>
          <span className="postTitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            molestiae cumque laboriosam? Hic.
          </span>
          <br />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tenetur ipsam ipsa vitae ad ab, omnis saepe error atque nihil sint
          amet voluptatibus modi, consequatur nisi aperiam cumque molestias
          illum quas commodi veniam laudantium? Iusto illo repellat voluptatum
          repudiandae sunt velit quos! Commodi adipisci corrupti impedit
          possimus sit, at, quos odit quaerat est sint id ipsum ullam
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati tenetur ipsam ipsa vitae ad ab, omnis saepe error atque
          nihil sint amet voluptatibus modi, consequatur nisi aperiam cumque
          molestias illum quas commodi veniam laudantium? Iusto illo repellat
          voluptatum repudiandae sunt velit quos! Commodi adipisci corrupti
          impedit possimus sit, at, quos odit quaerat est sint id ipsum ullam
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati tenetur ipsam ipsa vitae ad ab, omnis saepe error atque
          nihil sint amet voluptatibus modi, consequatur nisi aperiam cumque
          molestias illum quas commodi veniam laudantium? Iusto illo repellat
          voluptatum repudiandae sunt velit quos! Commodi adipisci corrupti
          impedit possimus sit, at, quos odit quaerat est sint id ipsum ullam
          voluptates.
        </p>
      </Link>
    </div>
  );
}
