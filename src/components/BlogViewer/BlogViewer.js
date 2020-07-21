import React, { useState, useEffect } from 'react';
import { BlogNav } from './BlogNav';

const BlogViewerX = () => {
  const [data, setData] = useState([]);
  const [pagePos, setPagePos] = useState(0);
  const [pageTokens, setPageTokens] = useState(['']);
  const [apiUrl, setApiUrl] = useState('https://www.googleapis.com/blogger/v3/blogs/2726861849607401146/posts?key=AIzaSyCgg1t9I1o3nz8OG1En1Bbqt8I-vF18LvU');

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
    console.log('loading data from ', apiUrl);
    fetch(apiUrl)
    .then(res => res.json())
    .then(
        result => {
          console.log("result", (result));
          setData(result)
          //add new nextPage Token to the array of tokens
          if(!pageTokens.includes(result.nextPageToken)) {
              console.log('fetch: here is the loaded token ' + result.nextPageToken);
              setPageTokens(pageTokens => [...pageTokens, result.nextPageToken]);
          }
        }
    )
  }

  //useEffect(fetchBlogData, [])
  useEffect(() => console.log('fetch: here it is pushed into the array ' + pageTokens), [pageTokens])
  useEffect(() => {
    console.log('heres where we are going', pageTokens[pagePos]);
    updateApiUrl(pageTokens[pagePos]);
  }, [pagePos])
  useEffect(() => {
    fetchBlogData(pageTokens[pagePos]);
  }, [apiUrl])

  return (
    <section className="blog-viewer">
      <BlogNav {...{pageTokens, pagePos, setPagePos, data}} />
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
      <BlogNav {...{pageTokens, pagePos, setPagePos, data}} />
    </section>
  )
}

export { BlogViewerX };
