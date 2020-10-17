
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      return e (
        'button',
        'Like'
      );
    }
  }

ReactDOM.render(
    e (LikeButton()), 
    document.querySelector('#nav_com_react')
);