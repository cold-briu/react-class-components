// PROGRAMACIÓN ORIENTADA A OBJETOS
// SE BASA EN PLANTILLAS LLAMADAS CLASES

import React, { useEffect, useState } from "react"


export const Persona = (props) => {
	const [nombre] = useState(props.nombre)
	const [edad, setEdad] = useState(props.edad)

	const cumplirAños = () => setEdad(edad + 1)

	useEffect(() => {
		console.log(`${nombre} @ ${edad} > updated!`);
	}, [edad])

	return (
		<div className="card">
			<div className="card-header">
				Persona
			</div>
			<div className="card-body">
				<h5 className="card-title">{nombre}</h5>
				<p className="card-text">{edad}</p>
				<button
					className="btn btn-primary"
					onClick={cumplirAños}
				>
					cumple!
				</button>
			</div>
		</div>
	)
}

// export class Persona extends React.Component {
// 	// puede asignar propiedades del objeto
// 	// primero ejecutan el constructor
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			nombre: props.nombre,
// 			edad: props.edad
// 		}
// 	}

// 	componentDidMount = () => {
// 		console.log(`3. ${this.state.nombre} ${this.state.edad} @ componentDidMount`);
// 		console.log("");

// 	}

// 	componentDidUpdate = () => {
// 		console.log(`4. ${this.state.nombre} ${this.state.edad} @ componentDidUpdate`);
// 		console.log("");
// 	}

// 	// Métodos del objeto
// 	cumplirAños = () => {
// 		this.setState({
// 			edad: this.state.edad + 1
// 		})
// 	}

// 	render() {

// 		return (
// 			<div className="card">
// 				<div className="card-header">
// 					Persona
// 				</div>
// 				<div className="card-body">
// 					<h5 className="card-title">{this.state.nombre}</h5>
// 					<p className="card-text">{this.state.edad}</p>
// 					<button
// 						className="btn btn-primary"
// 						onClick={this.cumplirAños}
// 					>
// 						cumple!
// 					</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }
