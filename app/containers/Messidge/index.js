/*
 *
 * Messidge
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase';

import { withRouter } from 'react-router';

import moment from 'moment';
import shortid from 'shortid';
import 'whatwg-fetch';

import Task from 'components/Task';
import ToolDrawer from 'containers/ToolDrawer';

import { createStructuredSelector } from 'reselect';
import makeSelectMessidge from './selectors';

import { MainContainer, BottomBar, Tasks, TimePicker } from './styled';

export class Messidge extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = {
      displayTime: moment(),
      phoneNumber: '',
      tasks: [],
      showTools: false,
    };
  }

  componentWillMount() {
    const user = firebase.auth().currentUser;
    console.log(user, 'page');
    if (!user) {
      this.props.router.push('/');
    }
  }


  createMessage() {
    this.setState({
      tasks: this.state.tasks.concat([{ message: '', time: this.state.displayTime, id: shortid.generate() }]),
    });
  }

  updateMessage(message, id) {
    const messages = this.state.tasks;
    function fromId(element) {
      return element.id === id;
    }

    messages.find(fromId).message = message;
    console.log(messages);
  }

  deleteMessage(id) {
    const messages = this.state.tasks;
    function filterByID(item) {
      if (item.id === id) {
        return false;
      }
      return true;
    }

    const updatedMessages = messages.filter(filterByID);
    //   console.log('Filtered Array\n', updatedMessages);
    this.setState({ tasks: updatedMessages });
  }
  // http://ec2-54-183-134-90.us-west-1.compute.amazonaws.com:8080/react
  // http://localhost:8080/react

  handleSave() {
    console.log(this.state.tasks);
    fetch('http://13.57.1.30:8080/react', {
      method: 'post',
      body: JSON.stringify(this.state.tasks),
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    const hours = new Array(24).fill(0);
    const minutes = new Array(12).fill(0);
    const tasksSorted = this.state.tasks.sort((a, b) => a.time - b.time);

    return (
      <div>
        <MainContainer>
          <div style={{ margin: 25 }}>
            <h1>
              {this.state.displayTime.format('HH:mm')}
            </h1>
          </div>
          <TimePicker>
            <Times
              hours={hours}
              minutes={minutes}
              offset={0}
              displayTime={(time) => this.setState({ displayTime: time })}
              click={() => this.createMessage()}
            />
          </TimePicker>
          {this.state.tasks.length > 0 ?

            <Tasks>
              {tasksSorted.map((val) =>
                <Task
                  key={val.id}
                  val={val}
                  delete={(id) => this.deleteMessage(id)}
                  update={(message, id) => this.updateMessage(message, id)}
                />
              )}
            </Tasks>

            :

            <h1 style={{ textAlign: 'center', width: '100%' }}>
              Pick a time to add a new message to the queue
            </h1>

          }

        </MainContainer>
        <BottomBar>
          <h2
            onClick={() => this.setState({ tasks: [] })}
          >
            clear all
          </h2>
          <h2
            onClick={() => this.handleSave()}
          >
            save
          </h2>
          <h2
            onClick={() => this.setState({ showTools: true })}
          >
            tools
          </h2>
        </BottomBar>
        {this.state.showTools === true ? <ToolDrawer close={() => this.setState({ showTools: false })} /> : null}
      </div>
    );
  }
}

Messidge.propTypes = {
  router: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Messidge: makeSelectMessidge(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messidge));

export function Times(props) {
  return (
    <div>
      {props.hours.map((val, i) =>
        <div key={i}>
          {props.minutes.map((value, min) =>
            <div
              key={min}
              style={{ margin: 0, cursor: 'pointer', height: 2, width: 25, backgroundColor: 'black' }}
              onMouseEnter={() => props.displayTime(moment({ hour: (i + props.offset), minute: min * 5 }))}
              onClick={() => props.click()}
            >

            </div>
          )}
        </div>
      )}
    </div>
  );
}


Times.propTypes = {
  hours: PropTypes.array,
  minutes: PropTypes.array,
};
