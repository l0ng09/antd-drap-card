/*
 * @Author: Len hong
 * @Date: 2019-11-08 09:48:37
 * @LastEditTime: 2019-11-18 16:06:47
 * @LastEditors: Len hong
 * @Description:
 */
import React, { Component } from "react";
import { Card } from "antd";
import CardDrap from "./CardDrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        { name: "a1", id: 1 },
        { name: "a2", id: 2 },
        { name: "a3", id: 3 },
        { name: "a4", id: 4 },
        { name: "a5", id: 5 },
        { name: "a6", id: 6 },
        { name: "a7", id: 7 },
        { name: "a8", id: 8 },
        { name: "a9", id: 9 },
        { name: "a10", id: 10 }
      ]
    };
  }

  onChange = res => {
    console.log(res);
  };

  render() {
    const { dataList } = this.state;
    return (
      <CardDrap data={dataList} onChange={res => this.onChange(res)}>
        {dataList.map(item => (
          <Card key={item.id} id={item.id} title={item.name} bodyStyle={{padding:'0'}}/>
        ))}
      </CardDrap>
    );
  }
}

export default App;
