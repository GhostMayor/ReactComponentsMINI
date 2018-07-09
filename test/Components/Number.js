import Proto from './ComponentPrototype.js';

class Number extends Proto {
  constructor(props) {
    super(props);
  }

  render() {
    return this.edit ? React.createElement(
      'div',
      null,
      this.caption,
      React.createElement('input', { value: this.value, onChange: e => {
          this.value = parseInt(e.target.value) || 0;
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

export default Number;