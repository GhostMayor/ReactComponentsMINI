import Proto from './ComponentPrototype';

class Number extends Proto{
    constructor(props){
      super(props);
    }
  
    render(){
      return this.edit ? 
        <div>{this.caption}<input value={this.value} onChange={(e)=>{
          this.value = parseInt(e.target.value) || 0
          }}/></div> : <span>{this.caption}:{this.value}</span>
    }
  }


export default Number