import Proto from './ComponentPrototype.js';

class String extends Proto {
  constructor(props) {
    super(props);
  }

  render() {
    return this.edit ? React.createElement(
      'div',
      null,
      this.caption,
      React.createElement('input', { value: this.value, onChange: e => {
          this.value = e.target.value;
        } })
    ) : React.createElement(
      'span',
      null,
      this.caption,
      ':',
      this.value
    );
  }
}

export default String;