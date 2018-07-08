import Proto from 'ComponentPrototype';

class Search extends Proto {
    constructor(props) {
      super(props);
  
      this.state = {
        value: props.value,
        searchers: ["test", "test"],
        width:props.width,
      };
    }
    static item(value, id, width) {
      return <div style={{background:'gray'}} key={id}>{value}</div>;
    }
  
    render() {
      return (
        <div style={{ width: this.state.width }}>
          <input value={this.state.value} 
            onChange={(e) => { this.editValue(e.target.value)}}
          style={{
            margin:0,padding:0,width:this.state.width,outline:0,border:'none'
          }}/>
          <div>
            {this.state.searchers.map((value, index) => {
              console.log(value.indexOf(this.state.value))
              if(value.indexOf(this.state.value) >= 0){
                return Search.item(value, index)
              } ;
            })}
          </div>
        </div>
      );
    }
  }


export default Search;