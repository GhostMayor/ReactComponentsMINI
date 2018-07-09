// "use strict";
// import ReactDOM from 'react-dom'
import String from './Components/String.js'
import Number from './Components/Number.js'

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(String, {value: "testString",}),
    React.createElement(Number, {value: 2001})
  ),
  document.getElementById("root")
);

console.log('init')