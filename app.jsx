import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import Sdata from './Sdata';
function ncard(val) {
    return (
        <Card i={val.imgsrc}
            t={val.title}
            l={val.link}
            s={val.sname}
        />
    );
}
const App = () => (
    <>
        <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
        {Sdata.map(ncard)};
    </>
);
export default App;