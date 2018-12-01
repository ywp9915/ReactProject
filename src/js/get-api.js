import React,{component} from "react"
import axios from "axios"
const host="http://localhost:3000/"

const getDate=()=>{
	
	return axios.post('/api/ranking/get_data')
	.then((res)=>{
		console.log(data.datas.items);
	})
	.catch((err)=>{
		console.log(err);
	})
}
export {getDate};
