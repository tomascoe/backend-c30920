class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);

    addMascota = (name) => this.mascotas.push(name);

    countMascotas = () => console.log(`Cantidad de mascotas: ${this.mascotas.length}`);

    addBook = (title , author) => this.libros.push({nombre: title, autoth: author});

    getBookNames = () => console.log(this.libros.map(libro => libro.nombre));
}

let usuario1 = new Usuario('Tomas', 'Coelho', null, null);

//MASCOTAS 
usuario1.addMascota('Nefertiti')
usuario1.addMascota('Agnes');
usuario1.addMascota('Wanda');
usuario1.addMascota('Frida');

//LIBROS
usuario1.addBook('ZeroZeroZero', 'Roberto Saviano');
usuario1.addBook('Se questo e un uomo', 'Primo Levi');
usuario1.addBook('La teoria del tutto', 'Stephen W. Hawking');
usuario1.addBook('Despues de Auschwitz', 'Eva Schloss');
usuario1.addBook('La Gestapo', 'Frank McDonough');

//OUTPUTS
usuario1.getFullName();
usuario1.countMascotas();
usuario1.getBookNames();