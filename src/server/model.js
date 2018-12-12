const mongoose = require('mongoose')
const DB_URL=" mongodb://localhost:27017/userifo"
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success');
    
})
const models = {
    user:{
        'user':{'type':String,'require':true},
        'pwd':{'type':String,'require':true}
    },
    chat:{

    }
}

//创建所有对象的数据映射
for(let m in models){
    //m 为模型的名字，类似于表名，后边的参数类似于表中的字段
    mongoose.model(m,new mongoose.Schema(models[m]))
}

//暴露出接口
module.exports = {
    getModel:function(name){
        //获取名字为 name参数 所代表的数据
        return mongoose.model(name)
    }
}