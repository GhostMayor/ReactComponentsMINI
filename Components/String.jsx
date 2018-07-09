import Proto from 'ComponentPrototype';

class _String extends Proto {
    constructor(props){
      super(props);
    }
  
    render(){
      return this.edit ? 
        <div>{this.caption}<input value={this.value} onChange={(e)=>{this.value = e.target.value}}/></div> 
        : <span>{this.caption}:{this.value}</span>
    }
  }


export default _String;