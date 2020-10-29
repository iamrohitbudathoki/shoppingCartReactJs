import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'; 
// import Counters from './Component/counters.jsx';
// import TimerClock from './timerclock/timerclock';
// import CountDown from './timerclock/Countdown';
import AppCounter from './Component/app'

import AppPopUp from './popup/AppPopUp';
//import Testcounter from './Component/Testcounter'
import './popup/css/style.scss';


ReactDOM.render(
 <AppCounter/>,
  document.getElementById('root'))

// ReactDOM.render(
//     <AppPopUp/>,
//     document.getElementById('root')
// )

