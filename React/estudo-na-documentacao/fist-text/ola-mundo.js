



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

function OlaMundo(){
    return (
        <div>
            <h1>ola mundo</h1>
        </div>
        
    )
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

const domContainer = document.getElementById('ola-mundo');

ReactDOM.render(<OlaMundo/>, domContainer);

