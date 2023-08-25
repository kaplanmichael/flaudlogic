import React, { useState, useEffect } from "react";

const LatestNews = (props) => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [apiUrl, setApiUrl] = useState(
    "https://www.googleapis.com/blogger/v3/blogs/2726861849607401146/posts?key=AIzaSyCgg1t9I1o3nz8OG1En1Bbqt8I-vF18LvU&maxResults=1"
  );

  const fetchBlogData = (pageToken) => {
    console.log("loading data from ", apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setData(result);
      });
  };

  const createMarkup = (content) => {
    return { __html: content };
  };

  useEffect(fetchBlogData, []);

  return (
    <section className="latest-news">
      {data.items && (
        <article>
          <h3 dangerouslySetInnerHTML={createMarkup(data.items[0].title)}></h3>
          <p dangerouslySetInnerHTML={createMarkup(data.items[0].content)}></p>
        </article>
      )}
    </section>
  );
};

export { LatestNews };
