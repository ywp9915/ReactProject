var express = require('express')
var proxy = require('http-proxy-middleware')
var app = express()
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Header","Content-Type,Content-Length,Authorization");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization, Accept");
    res.header("Access-Control-Allow-Method","PUT,POST,GET,DELETE.OPTIONS");
    if(req.method=="OPTIONS"){
        res.send(200);
    }else{
        next();
    }
});
// proxy middleware options
var options = {
  target: 'https://www.iyemao.cc', // target host
  changeOrigin: true, // needed for virtual hosted sites
//   ws: true,
   // proxy websockets
  pathRewrite: {
    '^/api': '/'// rewrite path
   
  }
  // ,
  // router: {
  //   'dev.localhost:3000': 'http://localhost:8000'
  // }
}
var exampleProxy = proxy(options)
app.use('/api', exampleProxy)
app.use("^/api",proxy({
    target: 'https://www.iyemao.cc', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
    '^/api': '/', // rewrite path
    }
}))

// const userRouter = require('./user')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const app = express()
// app.use(cookieParser())
// app.use(bodyParser())
// app.use('/user',userRouter)


// app.listen(3003);
app.listen(3000,function(){
    console.log("Server running on http://localhost:3000");
})