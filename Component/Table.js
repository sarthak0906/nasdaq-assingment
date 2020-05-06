import React from 'react';
import Table from 'react-bootstrap/Table'
import '../static/css/TableStyle.css'

export default class Table extends React.Component {    
  constructor(props){
    super(props);
    console.log(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }
  
  getKeys = function(){
    return Object.keys(this.props.data[0]);
  }
  
  getHeader = function(){
    var keys = this.getKeys();
    return keys.map((key, index)=>{
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }
  
  getRowsData = function(){
    var items = this.props.data;
    console.log(items[0])
    var keys = this.getKeys();
    return items.map((row, index)=>{
      return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  }
  
  render() {
      return (
        <div>
          <Table striped bordered hover variant="dark">
          <thead className="TableHead">
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>
            {this.getRowsData()}
          </tbody>
          </Table>
        </div>          
      );
  }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    if (key == "Time"){
      return <td key={props.data[index]} className="TableTime">{props.data[key]}</td>
    }
    return <td key={props.data[index]}>{props.data[key]}</td>
  })
}