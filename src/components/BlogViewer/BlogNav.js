import React from 'react';
import ReactGA from 'react-ga';
const BlogNav = ({pageTokens, pagePos, setPagePos, data, pageSize}) => {
const showPrevButton = pageTokens[pagePos - 1] || pageTokens[pagePos - 1] === "";
const showNextButton = data.items && data.items.length === pageSize;
  return (
    <section className="blog-nav">
          <button disabled={!showPrevButton} onClick={
            () => {
              setPagePos(pagePos - 1);
              ReactGA.event({
                category: 'User',
                action: 'Click',
                label: 'Prev'
              });
            }
          }>Prev</button>

          <button disabled={!showNextButton} onClick={
            () => {
              setPagePos(pagePos + 1);
              ReactGA.event({
                category: 'User',
                action: 'Click',
                label: 'Next'
              });
            }
          }>Next</button>

    </section>
  )
}

export { BlogNav };
