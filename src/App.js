import React from "react";
import { Persona } from "./Persona"

export default class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			fecha: props.mensaje,
			personas: []

		}

		console.log("1. soy constructor!");
		console.log("");
	}

	componentDidMount() {
		console.log("3. componentDidMount");
		console.log("");

	}

	componentDidUpdate() {
		console.log("4. componentDidUpdate");
		console.log("");

	}

	componentWillUnmount() {
		alert("4. chau :c");
		console.log("4. chau :c");
		console.log("");

	}

	crearPersona = () => {
		console.log("... ... creando persona");

		this.setState({
			personas: [
				...this.state.personas,
				{ nombre: "hola", edad: 10 }
			]
		})
	}

	render() {
		console.log("2. renderizando...");
		console.log(" · · personas\n", this.state.personas);
		console.log("");

		return (
			<>
				<h1>
					Hola, soy app
				</h1>
				<h4>
					<em>Hoy es: {this.state.fecha}</em>
				</h4>
				<button
					onClick={this.crearPersona}
					className="btn btn-success">
					nueva persona
				</button>

				{
					this.state.personas.map(
						p => <Persona nombre={p.nombre} edad={p.edad} />
					)
				}
			</>
		)
	}

}