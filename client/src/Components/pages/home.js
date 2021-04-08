import React from 'react';
import './style.css'

const Home = () => {
  return (
    <div className="div" style={{textAlign:"center"}}>
<div style={{backgroundColor:"blue",height:"50px",borderRadius:"30%"}}><a href="./array">Array</a></div>
<div style={{backgroundColor:"red",height:"50px",borderRadius:"30%"}}><a href="./string">String</a></div>
<div style={{backgroundColor:"blue",height:"50px",borderRadius:"30%"}}><a href="./matrix">Matrix</a></div>
<div style={{backgroundColor:"red",height:"50px",borderRadius:"30%"}}><a href="./stack">Stack</a></div>
<div style={{backgroundColor:"blue",height:"50px",borderRadius:"30%"}}><a href="./string">Queue</a></div>
<div style={{backgroundColor:"red",height:"50px",borderRadius:"30%"}}><a href="./string">LinkedList</a></div>
<div style={{backgroundColor:"blue",height:"50px",borderRadius:"30%"}}><a href="./string">Tree Graph Dp Grreedy Bit Manipulation</a></div>
    </div>
  );
};

export default Home;