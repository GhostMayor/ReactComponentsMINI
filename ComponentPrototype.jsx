import React from "react";

class Proto extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        value: props.value || null
      }
  
      this.getValue = this.getValue.bind(this);
      this.editValue = this.editValue.bind(this);
    }
  
    getValue(){
      return this.state.value
    }
  
    editValue(value){
      this.setState({value:value})
    }
  
    render(){
      return <span>{this.state.value}</span>
    }
  }


export default Proto;