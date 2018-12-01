import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";


class Clock extends React.Component{
	render() {
		return(
		<div>
			<h5>hi,world</h5>
			<p>now is {this.props.date.toLocaleTimeString()}.</p>
		</div>
		);
	}
}

function tick(){
	ReactDOM.render(
		<Clock date={new Date()}/>,
		document.getElementById("root")
	);
}
setInterval(tick,1000);

// document.documentElement.style.fontSize=document.documentElement.clientWidth/10+'px';
// const element=<h5>hello world!</h5>
// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );

// const listItems = numbers.map((numbers) =>
// <li key={numbers+1}>{numbers}</li>
// );
// render(
// 	<ul>{listItems}</ul>,
// 	document.getElementById('root')
// );


