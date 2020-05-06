import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Former from './Component/Form.js';
import './static/css/style.css';
import Table from './Component/Table';
import * as XLK16 from './Data/XLK-16.json';
import * as XLK17 from './Data/XLK-17.json';
import * as FTEC17 from './Data/FTEC-17.json';
import * as FTEC16 from './Data/FTEC-16.json';

const App = () => {
  const [startDate, setDate] = useState(new Date(2020, 3, 16));
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const SubmitFn = (stock, date) => {
    setFile( stock + "-" + date);
  }

  var table = RenderTable(file);

  return (
    <div className="Container">
      <div>
        <div className="Form">
          <Former submitFn={SubmitFn} />
        </div>
      </div>
      <div className="TableContainer"> 
        {
          (file) 
          ? table : ""
        }
      </div>
    </div>
  )
}

const RenderTable = (file) =>{
  if (file == ""){
    return ;
  }
  if (file == "XLK-16"){
    return <Table data={XLK16.data} />
  }
  if (file == "XLK-17"){
    return <Table data={XLK17.data} />
  }
  if (file == "FTEC-16"){
    return <Table data={FTEC16.data} />
  }
  if (file == "FTEC-17"){
    return <Table data={FTEC17.data} />
  }
  return ;
}

render(<App />, document.getElementById('root'));