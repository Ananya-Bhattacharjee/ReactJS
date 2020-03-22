import React from 'react'

//function Greet(){
//	return<h1>Hello Ananya</h1>
	
	
//}

/* const Greet=(props)=> {
	console.log(props)
	return (
		<div>
			<h1>
				Hello {props.name} a.k.a. {props.heroname}
			</h1>
			{props.children}
		</div>
	
	
		)
	}

 */


const Greet=(props)=> {
	/* console.log(props) */
	const {name, heroname} = props
	return (
		<div>
			<h1>
				Hello {name} a.k.a. {heroname}
			</h1>
{/* 			{props.children}
 */}		</div>
	
	
		)
	}




 export default Greet