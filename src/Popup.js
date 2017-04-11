import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
  componentDidMount() {
    console.log('mount');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const container = document.createElement('div');
document.body.appendChild(container);

export default function popup(content) {

  ReactDOM.render(
    <Popup>{content}</Popup>,
    container
  );
}
