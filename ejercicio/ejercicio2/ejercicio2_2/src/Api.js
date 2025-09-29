import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=10&format=json&origin=*')
      .then(result => result.json())
      .then(data => setData(data.query.random));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default Api;
