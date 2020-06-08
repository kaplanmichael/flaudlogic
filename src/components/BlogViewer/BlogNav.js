import React from 'react';
const BlogNav = ({pageTokens, pagePos, setPagePos, data}) => {

const showPrevButton = pageTokens[pagePos - 1] || pageTokens[pagePos - 1] === "";
const showNextButton = data.items && data.items.length === 10;
  return (
    <section className="blog-nav">
          <button disabled={!showPrevButton} onClick={
            () => {
              setPagePos(pagePos - 1);
            }
          }>Prev</button>

          <button disabled={!showNextButton} onClick={
            () => {
              setPagePos(pagePos + 1);
            }
          }>Next</button>

    </section>
  )
}

export { BlogNav };
