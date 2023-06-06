import React from "react";
import { Container } from "@mui/system";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";
const NewsContent = ({ newsArray, newsResults, loadmore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {newsArray.map((newsItem) => {
          return <NewsCard newsItem={newsItem} key={newsItem.title} />;
        })}

        {loadmore <= newsResults && (
          <>
            <hr />
            <button
              className="loadmore"
              onClick={() => setLoadMore(loadmore + 20)}
            >
              Loadmore
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
