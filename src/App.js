import React from 'react'
import './App.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid




function App() {
	const[toDos,setToDos]=useState([])
	const [toDo,setToDo]=useState('')
	const setVal=()=>{
		if(toDo){
				setToDos([...toDos,{id:uuidv4(),text:toDo,status:false}])
		setToDo('')

		}else{
			alert('please enter a value')
		}
	
	}
  return (
		<>
		<div className="app">
			<div className="mainHeading">
				<h1>ToDo List</h1>
			</div>
			<div className="subHeading">
				<br />
				<h2>Please Enter your ToDos🌝  </h2>
			</div>
		<div className="container">
				<div className="input">
				<input onChange={(e)=>setToDo(e.target.value)} value={toDo || ' '} type="text" placeholder="🖊️ Add item..." />
				<i onClick={setVal}  className="fas fa-plus"></i>
			</div>
			<div className="todos">
				{

					toDos.map((ele)=>{
						return (
							<>
							<div className="todo">
								<div className="left">
									<input onChange={(e)=>{
										console.log(e.target.checked);

										setToDos(toDos.filter(obj2=>{
											if(obj2.id==ele.id){
												obj2.status=e.target.checked
											}
											return obj2
										}))

									}} value={ele.status} type="checkbox" name="" id=""  />
									<p className={`${ele.status ? 'completed': ' '}`}>{ele.text}</p>

								</div>
								<div className="right">
									<i className="fas fa-times"
									onClick={()=>{
										setToDos(toDos.filter(ob=>ob.id!==ele.id))
										
									}}
									></i>
								</div>
							</div>

							</>
							
						);

					})
					
				}
				
			</div>
			
		</div>
		</div>
		<div id="completed">
			<h3>Completed Tasks</h3>
			<hr/>
				{
				toDos.map((ele)=>{
						if(ele.status){
							return (<p>{ele.text}</p> )
						}else{
							return null
						}
					})
			}
			</div>
		</>

  );
}

export default App