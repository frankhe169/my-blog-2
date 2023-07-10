import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const visitorCount = localStorage.getItem("visitorCount");

    if (visitorCount) {
      count = parseInt(visitorCount);
    }

    count++;

    localStorage.setItem("visitorCount", count.toString());
    setVisitorCount(count);
  }, []);


  return (
    <div className="app">
      <div className="header">        
          <h2>My Blog</h2>
          <img src="my-img.png"></img>
      </div>

      <div className="content">
        Write something here
      </div>

      <div>Visitor Count: {visitorCount}</div>
      
    </div>
  );
}

export default App;
