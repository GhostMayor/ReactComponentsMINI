import Proto from './ComponentPrototype.js';

class Search extends Proto {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      searchers: ["test", "test"],
      width: props.width
    };
  }
  static item(value, id, width) {
    return React.createElement(
      "div",
      { style: { background: 'gray' }, key: id },
      value
    );
  }

  render() {
    return React.createElement(
      "div",
      { style: { width: this.state.width } },
      React.createElement("input", { value: this.state.value,
        onChange: e => {
          this.editValue(e.target.value);
        },
        style: {
          margin: 0, padding: 0, width: this.state.width, outline: 0, border: 'none'
        } }),
      React.createElement(
        "div",
        null,
        this.state.searchers.map((value, index) => {
          console.log(value.indexOf(this.state.value));
          if (value.indexOf(this.state.value) >= 0) {
            return Search.item(value, index);
          };
        })
      )
    );
  }
}

export default Search;