import './App.css';
import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Pagination} from 'antd';

function App () {
  const [data, setData] = useState ([]);
  const [pageNumber, setPageNumber] = useState (1);

  useEffect (
    () => {
      //const abortController = new AbortController();
      function fetchApi () {
        fetch (
          `https://api.unsplash.com/search/collections?page=${pageNumber}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`
        )
          .then (res => res.json ())
          .then (result => setData (result.results))
          .catch (err => console.log ('erro'));
      }
      fetchApi();
      console.log (data);
      // return () => {
      //   abortController.abort()
      // }
    },
    [pageNumber]
  );

  const handelChange = event => {
    setPageNumber(event.target.value);
  };

  return (
    <div className="pagination-cont">
      <div className="photo" />
      <div className="pagination">
{console.log(pageNumber)}
        <Pagination defaultCurrent={1} total={50} onChnage={handelChange} />
      </div>
    </div>
  );
}

export default App;
