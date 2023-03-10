import React from "react";
import "./article.css";

const article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article_content">
        <p>{date}</p>
        <h4>{title}</h4>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default article;
