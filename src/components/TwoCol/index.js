import React from 'react';

const TwoCol = (props) => {

  return (
    <section className="two-col">
      <div className="col1">
        {props.left}
      </div>
      <div className="col2">
        {props.right}
      </div>
    </section>
  )
}

export { TwoCol };
