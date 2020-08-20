import React, { useState, useEffect } from 'react';
import { BlogNav } from './BlogNav';

const BlogViewer = () => {
  const pageSize = 10; //can't be less than 10
  const [data, setData] = useState([]);
  const [pagePos, setPagePos] = useState(0);
  const [pageTokens, setPageTokens] = useState(['']);
  const [apiUrl, setApiUrl] = useState(`https://www.googleapis.com/blogger/v3/blogs/2726861849607401146/posts?key=AIzaSyCgg1t9I1o3nz8OG1En1Bbqt8I-vF18LvU&maxResults=${pageSize}`);

  const createMarkup = (content) => {
      return {__html: content}
  }

  const grabDate = (utc) => {
    let date = new Date(utc);
    return (`${date.getMonth()+1}.${date.getDate()}.${date.getFullYear()}`);
  }

  const grabTime = (utc) => {
    let date = new Date(utc);
    let hours = date.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    return (`${hours}:${date.getMinutes().toString().padStart(2, '0')} ${ampm}`);
  }

  const updateApiUrl = (pageToken) => {
    if (pageToken !== undefined && pageToken !== '' ) {
        let newUrl = apiUrl;
        newUrl += '&pageToken=' + pageToken;
        setApiUrl(newUrl);
    } else {
      let url = new URL(apiUrl);
      let params = new URLSearchParams(url.search);
      params.delete('pageToken');
      url.search = params.toString();
      setApiUrl(url);
    }
  }

  const fetchBlogData = (pageToken) => {
    let cachedResults = JSON.parse(sessionStorage.getItem(pageToken));
    if (cachedResults) {
          setData(cachedResults);
          if(!pageTokens.includes(cachedResults.nextPageToken)) {
              setPageTokens(pageTokens => [...pageTokens, cachedResults.nextPageToken]);
          }
    } else {
        fetch(apiUrl)
        .then(res => res.json())
        .then(
            result => {
              setData(result)
              //cache the results in session sessionStorage
              sessionStorage.setItem(pageToken, JSON.stringify(result));
              //add new nextPage Token to the array of tokens
              if(!pageTokens.includes(result.nextPageToken)) {
                  setPageTokens(pageTokens => [...pageTokens, result.nextPageToken]);
              }
            }
        )
    }
  }

  //useEffect(fetchBlogData, [])
  useEffect(() => {
    updateApiUrl(pageTokens[pagePos]);
  }, [pagePos])
  useEffect(() => {
    fetchBlogData(pageTokens[pagePos]);
  }, [apiUrl])

  return (
    <section className="blog-viewer">
      <BlogNav {...{pageTokens, pagePos, setPagePos, data, pageSize}} />
      {data.items &&
        data.items.map(item => (
          <article key={item.id}>
              <time><em>{`${grabDate(item.published)} // posted by ${item.author.displayName} @ ${grabTime(item.published)}`}</em></time>
              <h2 dangerouslySetInnerHTML={createMarkup(item.title)}></h2>
              <p dangerouslySetInnerHTML={createMarkup(item.content)}></p>
              [sharing widget]
          </article>
        ))
      }
      <BlogNav {...{pageTokens, pagePos, setPagePos, data, pageSize}} />
    </section>
  )
}

export { BlogViewer };
