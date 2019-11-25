/*
 * @Author: Len hong
 * @Date: 2019-11-08 09:48:37
 * @LastEditTime: 2019-11-18 16:07:45
 * @LastEditors: Len hong
 * @Description:
 */
import React, { PureComponent } from "react";

class CardDrap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardList: props.data,
      elementList: props.children,
      curDragIndex: null
    };
  }

  // 鼠标开始拖拽事件处理
  onDragStart = index => {
    this.setState({ curDragIndex: index });
  };

  // 卡片拖拽过程中
  onDragEnter = index => {
    const { curDragIndex } = this.state;
    const from = curDragIndex;
    const to = index;
    this.itemMove(from, to);
    // 页面每一次移动都会发生一次交换，交换之后，curDragIndex 都会发生改变
    this.setState({ curDragIndex: index });
  };

  // 结束拖拽事件
  onDragEnd = () => {
    const { onChange } = this.props;
    const { cardList } = this.state;
    onChange(cardList);
    this.setState({ curDragIndex: null });
  };

  itemMove = (from, to) => {
    const { cardList } = this.state;
    // 数据进行交换
    [cardList[from], cardList[to]] = [cardList[to], cardList[from]];
    this.setState({ cardList });
  };

  render() {
    const { cardList, elementList, curDragIndex } = this.state;
    return (
      <div>
        {cardList.map((item, index) => {
          const { id } = item;
          const num = elementList.findIndex(el => el.props.id === id);
          if (num !== -1 && React.isValidElement(elementList[num])) {
            return React.cloneElement(elementList[num], {
              onDragStart: () => this.onDragStart(index),
              onDragEnter: () => this.onDragEnter(index),
              onDragEnd: () => this.onDragEnd(),
              className: curDragIndex === index ? "active" : "",
              draggable: true
            });
          }
          return elementList[num];
        })}
      </div>
    );
  }
}

export default CardDrap;
