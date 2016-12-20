
var router = require('express').Router();
var React = require('react');
var ReactDomServer = require('react-dom/server');

var ReactRouter = require('react-router');
var routes = require('./routes.jsx');
// app.use(express.static(path.join(__dirname,'dist')))
router.get('*',function(req,res){
  var props = {title:'Universal React7878'}
  ReactRouter.match({
    routes: routes,
    location:req.url
  },function(err,redirectLocation,renderProps){
    if(renderProps) {
      var html = ReactDomServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement = {function(Component, renderProps) {
            return <Component {...renderProps} {...props} />;
          }}
        />
      );
      res.send(html)
    }else {
      res.status(404).send('Not Found')
    }
  })
});
module.exports = router
