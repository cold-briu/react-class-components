// PROGRAMACIÓN ORIENTADA A OBJETOS
// SE BASA EN PLANTILLAS LLAMADAS CLASES

export class Persona {
	// puede asignar propiedades del objeto
	// primero ejecutan el constructor
	constructor(_nombre, _edad) {
		this.nombre = _nombre
		this.edad = _edad
	}

	// Métodos del objeto
	cumplirAños() {
		this.edad = this.edad + 1
		// this.edad += 1
	}
}

class Cantante extends Persona {
	// Las propiedades también pueden venir inicializadas en la clase
	discos = [];

	constructor(_nombre, _edad, _sello) {
		super(_nombre, _edad)
		this.disquera = _sello
	}

	sacarDisco(_nombreDisco) {
		this.discos.push(
			new Disco(
				_nombreDisco,
				this.disquera,
				this.nombre
			)
		)
	}
}

class Disco {
	constructor(_nombreDisco, _sello, _artista) {
		this.nombreDisco = _nombreDisco
		this.sello = _sello
		this.artista = _artista
	}
}



// LAS CLASES SE INSTANCIAN CREANDO OBJETOS

const badBunny = new Cantante("benito", 10, "sony")
const RG4L = new Cantante("ñengo flow", 12, "universal")

console.log(badBunny.nombre, badBunny.edad); // => "benito"

badBunny.cumplirAños()
badBunny.sacarDisco("un verano sin teléfono")

console.log(badBunny.discos);  // => ["un verano..."]
