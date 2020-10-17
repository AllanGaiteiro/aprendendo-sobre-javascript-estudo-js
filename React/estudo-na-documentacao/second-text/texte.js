

//const e = React.createElement

/*
class OlaMundo extends React.Component{
    render(){
        return e (
            'h1',
            {children: 'Olá Mundo!!!'}
        )
    }
}
*/

function OlaMundo() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'ola mundo'
        )
    );
}

/*
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
*/

var domContainer = document.getElementById('teste');

ReactDOM.render(React.createElement(OlaMundo, null), domContainer);