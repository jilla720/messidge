import React from 'react';
import animations from './animations';

import { Container, Card, TextBox } from './styled';

export default class Task extends React.PureComponent {

  handleContainerFocus() {
    animations.FocusScale(this.card);
  }

  handleContainerLeave() {
    animations.FocusScaleRev(this.card);
  }

  handleBlur(id) {
    if (this.message.innerText === '') {
      this.message.innerText = this.props.placeholder;
    }
    this.props.update(this.message.innerText, id);
    animations.TextBlur(this.card);
  }

  handleChange(id) {
    this.props.update(this.message.innerText, id);
  }

  handleFocus() {
    if (this.message.innerText === this.props.placeholder) {
      this.message.innerText = '';
    }
    animations.TextFocus(this.card);
  }

  remove(id) {
    this.card.style.opacity = 0;
    animations.Remove(this.container, () => this.props.delete(id));
  }

  render() {
    // console.log("shitfucker");
    const id = this.props.val.id;
    const time = this.props.val.time.format('HH:mm');

    const closeButtonStyle = {
      position: 'absolute',
      bottom: 2,
      right: 2,
    };

    return (
      <Container
        innerRef={(el) => { this.container = el; }}
      >
        <Card
          innerRef={(el) => { this.card = el; }}
          onMouseOver={() => this.handleContainerFocus()}
          onMouseLeave={() => this.handleContainerLeave()}
          onFocus={() => console.log('jkldf')}
        >
          <h2>
            {time}
          </h2>
          <div>
            <TextBox
              contentEditable
              suppressContentEditableWarning
              innerRef={(el) => { this.message = el; }}
              onBlur={() => this.handleBlur(id)}
              onFocus={() => this.handleFocus()}
              onChange={(e) => console.log(e.target.value)}
            >
              {this.props.placeholder}
            </TextBox>
          </div>
          <div
            onMouseDown={() => this.remove(id)}
            style={closeButtonStyle}
          >
            <svg height="20" width="20" >
              <circle style={{ cursor: 'pointer' }} cx="5" cy="5" r="5" fill="rgb(255, 134, 156)" />
            </svg>
          </div>
        </Card>
      </Container>
    );
  }
}

Task.defaultProps = {
  placeholder: 'Add something...',
};

Task.propTypes = {
  update: React.PropTypes.func,
  delete: React.PropTypes.func,
  val: React.PropTypes.object,
  placeholder: React.PropTypes.string,
};
