import React from 'react';
import {render}from 'react-dom';
import "./css/index.css";




const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li key={numbers+1}>{numbers}</li>
);
render(
	<ul>{listItems}</ul>,
	document.getElementById('root')
);

