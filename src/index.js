import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval( // doesnt seem to need the this.timerID. Oh, but I guess I can't clear it without it?
      () => this.tick(),
      this.props.frequency
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // still works without this.
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock frequency="1000" />
      <Clock frequency="2000" />
      <Clock frequency="3000" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);





// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

//const element = <Welcome name="Sara" />;
// I want to be able to inject another div into Welcome and add "We are currently ... props.storeStatus"  (closed/open).


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
