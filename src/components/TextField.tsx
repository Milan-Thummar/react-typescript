import React, {useRef, useState,useEffect} from 'react';
import axios from 'axios';


interface Props {
	name:string,
	i:number,
}

interface People{
	id:number;
	name:string;
	email:string;
	address:{
		street:string;
		city:string;
		zipcode:number;
	}
}


const TextField: React.FC<Props> = ({name,i}) => {

	const inputref = useRef<HTMLInputElement>(null)
	const [counter, setcounter] = useState<string>('sgsdgs')
	const [propleData, setpropleData] = useState<People[]>([])

	const handleChange = () =>{
		console.log(inputref.current?.value)
	}

	const handleIncrement =()=>{
		setcounter(counter)
	}
	
	const handleDecrement =()=>{
		setcounter(counter)
	}

	 const personData = async () => {
		await axios.get('https://jsonplaceholder.typicode.com/users').
		then(res => setpropleData(res.data)).
		then(err => console.log(err))
	}
	useEffect(() => {
			personData()
		}, [])
		
interface FuncProps{
		title:string;
	}	


	const Heading = ({title}:FuncProps) => {
		return <h1>{title}</h1>
	} 

	
 
 return (
	  <div>
		  <Heading title='Milan Thummar'></Heading>
		  <input type="text" ref={inputref} onChange={handleChange}/>
		  <h2>{name}</h2>
		  <h3>{i}</h3> 
		  <h1>{inputref.current?.value}</h1>
		  <button onClick={handleIncrement}>Increment</button>
		  <h2>{counter}</h2>
		  <button onClick={handleDecrement}>Decrement</button>

		  <ul>
				{
					propleData.map(person => (
						<div style={{border:'1px solid red'}}>
							<li>{person.id}</li>
							<li>{person.name}</li>	
							<li>{person.email}</li>	
							<li>{person.address.street}</li>	
						</div>	
							))
				}
		  </ul>
	  </div>

  ) ;
};

export default TextField;
