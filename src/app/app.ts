import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portafolio-personal';

  // SEÑAL 1: Información personal
  nombre = signal('Tu Nombre');
  edad = signal(20);

  // SEÑAL 2: Carrera/Estudios
  carrera = signal('Ingeniería de Sistemas');

  // SEÑAL 3: Hobbies (puede cambiar)
  hobbies = signal(['Programar', 'Leer', 'Deportes']);

  // SEÑAL 4: Contacto
  email = signal('tu.email@ejemplo.com');

  // SEÑAL 5: Estado de habilidades
  mostrarHabilidades = signal(false);
  // Función para cambiar el nombre
  cambiarNombre() {
    this.nombre.set('Luis Trejos'); // Cambia por tu nombre real
    this.edad.set(25); // Cambia por tu edad real
  }

  // Función para cambiar la carrera
  cambiarCarrera() {
    this.carrera.set('Desarrollo Web');
  }
  // Función para cambiar hobbies
cambiarHobbies() {
  this.hobbies.set(['Videojuegos', 'Música', 'Viajar', 'Cocinar']);
}

// Función para mostrar/ocultar habilidades
toggleHabilidades() {
  this.mostrarHabilidades.set(!this.mostrarHabilidades());
}

// Función para cambiar email de contacto
cambiarContacto() {
  this.email.set('nuevo.email@contacto.com');
}
}

