const App = React.createClass({
  displayName: 'App',

  render() {
    return React.createElement('h1', null);
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('images'));
