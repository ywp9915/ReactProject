const express = require('express')
const proxy = require('http-proxy-middleware')
 
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Header","Content-Type,Content-Length,Authorization");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization, Accept");
    res.header("Access-Control-Allow-Method","PUT,POST,GET,DELETE.OPTIONS");
    if(Request.method=="OPTIONS"){
        res.send(200);
    }else{
        next();
    }
});
// proxy middleware options
const options = {
  target: 'https://www.iyemao.cc', // target host
  changeOrigin: true, // needed for virtual hosted sites
//   ws: true,
   // proxy websockets
  pathRewrite: {
    '^/api': '/', // rewrite path
   
  }
  // ,
  // router: {
  //   'dev.localhost:3000': 'http://localhost:8000'
  // }
}
const exampleProxy = proxy(options)
const app = express()
app.use('/api', exampleProxy)
app.use("^/api",proxy({
    target: 'https://www.iyemao.cc', // target host
    changeOrigin: true, // needed for virtual hosted sites
    // ws: true,
     // proxy websockets
    pathRewrite: {
    '^/api': '/', // rewrite path
   
  }
}))
app.listen(3000,function(){
    console.log("Server running on http://localhost:3000");
})