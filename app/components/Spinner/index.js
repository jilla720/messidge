import React from 'react';
import animations from './animations';

export default function Spinner(props) {
  return (
    <div>
      {props.spin ?
        <h1
          style={{ width: 20 }}
          ref={(el) => {
            animations.Spin(el);
          }}
        >
          H
        </h1>
        :
        null
      }
    </div>
  );
}

Spinner.defaultProps = {
  spin: true,
};

Spinner.propTypes = {
  spin: React.PropTypes.bool,
};
