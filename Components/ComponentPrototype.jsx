import React from "react";

class Proto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || null,
      width: props.width || null,
      height: props.height || null,
      left:props.width || null,
      right: props.right || null,
      top: props.top || null,
      bottom: props.bottom || null,
      caption: props.caption || null,
      edit: props.edit || false,
      class: props.class || null,
    }

    this.getValue = this.getValue.bind(this);
    this.editValue = this.editValue.bind(this);
  }

  get class(){
    return this.state.class;
  }
  get edit(){
    return this.state.edit
  }

  get value() {
    return this.state.value
  }

  set value(value) {
    this.setState({ value: value })
  }

  get caption(){
    return this.state.caption
  }

  set caption(value){
    this.setState({caption:value})
  }


  get height(){
    return this.state.height;
  }

  get width() {
    return this.state.width;
  }

  get top() {
    return this.state.top;
  }

  get bottom() {
    return this.state.bottom;
  }

  get left() {
    return this.state.left;
  }

  get right() {
    return this.state.right;
  }

  getValue() {
    return this.state.value
  }

  editValue(value) {
    this.setState({ value: value })
  }

  //  not necessary 
  render() {
    return <div className={this.state.class} style={{
      width: this.state.width,
      top: this.state.top,
      height: this.state.height,
      bottom: this.state.bottom,
      right: this.state.right,
      left: this.state.left,
      width: this.state.width,
    }}>{this.state.caption}{this.state.value}</div>
  }
}


export default Proto;