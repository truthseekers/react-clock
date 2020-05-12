import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//// Mine:

function Avatar(props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.alt} />;
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl="https://placekitten.com/100/100" alt={props.name} />
      <div class="UserInfo-name">
        {props.name} Hello again?
      </div>

    </div>);
}

function Comment(props) {
  console.log(props);
  return (
    <div className="Comment">
      <UserInfo name="Cindy Lou" />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}



/// Theirs


/////////////////////////////

function Avatar3(props) {
  console.log("avatar3 props");
  console.log(props);
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo3(props) {
  // console.log("userInfo3 props");
  // console.log(props);
  return (
    <div className="UserInfo">
      <Avatar3 user={props.user} />
      {/* <Avatar3 user={{ avatarUrl: "https://placekitten.com/200/200", name: "Fuck off Juice buckets" }} /> */}
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment3(props) {
  return (
    <div className="Comment">
      <UserInfo3 user={props.author} />
      {/* <UserInfo3 user={{ name: "Jesus" }} /> */}
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}









ReactDOM.render(
  <div>
    <h1>Hello, World! How is that..</h1>
    <Comment3 author={{ name: "Annie Parker", avatarUrl: "https://placekitten.com/300/300" }} text="I like it" date="6/6/06" />
  </div>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
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
