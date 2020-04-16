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
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import InLine from './components/InLine'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';




function App() {
  return (
	<div className="App">
		<ParentComp/>
		{/*<Table/>*/}
		{/*<FragmentDemo></FragmentDemo>*/}
		{/*<LifeCycleA></LifeCycleA>*}
		{/*<Form></Form>*/}
		{/*<h1 className='error'>Error</h1>
		<h1 className={styles.success}>Success</h1>*}



		{/* <InLine></InLine> */}
		{/*<Stylesheet primary = {true}></Stylesheet>*/}

		{/*<NameList></NameList>*/}
		{/*<UserGreeting></UserGreeting>*/}

		{/*<ParentComponent></ParentComponent>*/}

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
