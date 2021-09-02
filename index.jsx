import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import './index.css'
import Sdata from './Sdata';
import App from './app.jsx';

// function ncard(val) {
//     return (
//         <Card imgsrc={val.imgsrc}
//             title={val.title}
//             link={val.link}
//             sname={val.sname}
//         />
//     );
// }
ReactDOM.render(<App />, document.getElementById("root"));