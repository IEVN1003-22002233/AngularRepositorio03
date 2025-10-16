
export class Zodiaco {
dia: number = 0;
mes: number = 0;
anio: number = 0;
nombre: string = '';
apellidoM: string = '';
apellidoP: string = '';
genero: string = '';

public obtenerDatos() {
    const signos = [
        { signo: "Mono", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg" },
        { signo: "Gallo", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg" },
        { signo: "Perro", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg" },
        { signo: "Cerdo", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg" },
        { signo: "Rata", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg"},
        { signo: "Buey", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg" },
        { signo: "Tigre", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg" },
        { signo: "Conejo", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg" },
        { signo: "Dragón", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg" },
        { signo: "Serpiente", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg" },
        { signo: "Caballo", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg" },
        { signo: "Cabra", url: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg" }

 ];

    const indice = this.anio % 12;
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - this.anio;
    if (fechaActual < new Date(fechaActual.getFullYear(), this.mes - 1, this.dia)) {
        edad--;
    }

    const textoResultado = `Hola ${this.nombre} ${this.apellidoP} ${this.apellidoM}, tienes ${edad} años y tu signo zodiacal es: ${signos[indice].signo}`;

    return {
        texto: textoResultado,
        url: signos[indice].url
    };
}
}
