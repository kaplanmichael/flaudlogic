import React, { useState, useEffect } from 'react';
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
    console.log('page pos was updated');
    updateApiUrl(pageTokens[pagePos]);
  }, [pagePos])
  useEffect(() => {
    fetchBlogData(pageTokens[pagePos]);
  }, [apiUrl])

  return (
    <section className="blog-viewer">
    {pageTokens[pagePos - 1] &&
            <button onClick={() => {
              setPagePos(pagePos - 1);
              console.log('prev: heres where we are going', pageTokens[pagePos]);
              //fetchBlogData(pageTokens[pagePos]);
            }
        }>Prev</button>
    }
    {data.items && data.items.length === 10 && (
        <button onClick={() => {
            setPagePos(pagePos + 1);
            console.log('next: heres where we are going',pageTokens[pagePos]);
            //fetchBlogData(pageTokens[pagePos]);

        }
        }>Next</button>
    )}
      {data.items &&
        data.items.map(item => (
          <article key={item.id}>
              <time><em>{`${grabDate(item.published)} // posted by ${item.author.displayName} @ ${grabTime(item.published)}`}</em></time>
              <h2>{item.title}</h2>
              <div dangerouslySetInnerHTML={createMarkup(item.content)}></div>
              [sharing widget]
          </article>
        ))
      }
    </section>
  )
}

export { BlogViewerX };
