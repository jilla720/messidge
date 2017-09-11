import React from 'react';

export default class ToolDrawer extends React.Component { //eslint-disable-line

  render() {
    return (
      <div
        style={{
          width: 300,
          height: 500,
          backgroundColor: 'magenta',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <h2 onClick={() => this.props.close()}>
          close
        </h2>
        ToolDrawer
      </div>
    );
  }
}

ToolDrawer.propTypes = {
  close: React.PropTypes.func,
};
