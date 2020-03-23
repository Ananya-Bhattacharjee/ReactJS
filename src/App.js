import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ClassClick from './components/ClassClick'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'



function App() {
  return (
	<div className="App">
		<ParentComponent></ParentComponent>

		{/* <EventBind></EventBind>*/}
{/*  		<ClassClick></ClassClick>

		<FunctionClick></FunctionClick>
*/ 	}
{/* 		<Counter></Counter>
 	<Message/>
*/}		
{/* 		<Greet name="Bruce" heroname="Batman">
			<p>This is children props</p>
		</Greet>
		<Greet name="Clark" heroname="Superman">
		
			<button>Action</button>
		</Greet>

 		<Welcome name="Bruce" heroname="Batman">
		 

		 </Welcome>
 */}
		 
{/*		<Hello/>*/}
     </div>
  );
}

export default App;
