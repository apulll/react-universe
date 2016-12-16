
var React = require('react');

module.exports = React.createClass({
  _handleClick: function() {
    alert();
  },
  render:function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href="/dist/style.css" />
        </head>
        <body>
          <div>
            <h1>Hello World!</h1>
            <p>Isn`t server-side Rendering remarkable?</p>
            <button onClick={this._handleClick}>Click me</button>
          </div>
          <script dangerouslySetInnerHTML ={{__html:'window.PROPS=' + JSON.stringify(this.props)}}>

          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>

    )
  }
})
