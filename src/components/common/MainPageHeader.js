import React from 'react';
const MainPageHeader = ({text}) => {

  return (
    <h1 className="comp-main-page-header">
      <em data-text={text}>{text}</em>
    </h1>
  )
}

export { MainPageHeader };
