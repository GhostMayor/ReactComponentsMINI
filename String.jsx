import Proto from 'ComponentPrototype';

class _String extends Proto {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        style: props.style,
        editable: props.editable,
        caption: props.caption
      };
    }
  
    render() {
      return (
        <div>
          {this.state.caption ? 
            (<span style={{
               color: this.state.style ? this.state.style.color : null
               }}>
               {this.state.caption}
              </span>)
            : null}
          {this.state.editable ? <input onChange={e =>{this.editValue(e.target.value)}} value={this.state.value}></input> :<span style={this.state.style}>{this.state.value}</span>}
        </div>
      );
    }
  }


export default _String;