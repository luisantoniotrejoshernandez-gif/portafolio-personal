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

  // Función para cambiar el nombre (más profesional)
cambiarNombre() {
  if (this.nombre() === 'Luis Trejos') {
    this.nombre.set('Luis Antonio Trejos');
    this.edad.set(22);
  } else {
    this.nombre.set('Luis Trejos');
    this.edad.set(20);
  }
}

// Función para cambiar la carrera
cambiarCarrera() {
  const carreras = [
    'Ingeniería de Sistemas',
    'Desarrollo Web Full Stack', 
    'Ciencia de Datos',
    'Inteligencia Artificial'
  ];
  const currentIndex = carreras.indexOf(this.carrera());
  const nextIndex = (currentIndex + 1) % carreras.length;
  this.carrera.set(carreras[nextIndex]);
}

// Función para cambiar hobbies
cambiarHobbies() {
  const setsHobbies = [
    ['Programar', 'Leer', 'Deportes'],
    ['Videojuegos', 'Música', 'Viajar', 'Fotografía'],
    ['Cocinar', 'Cine', 'Gimnasio', 'Lectura'],
    ['Natación', 'Pintura', 'Blogging', 'Idiomas']
  ];
  const currentSet = this.hobbies().join(',');
  let nextSet;
  
  do {
    nextSet = setsHobbies[Math.floor(Math.random() * setsHobbies.length)];
  } while (nextSet.join(',') === currentSet);
  
  this.hobbies.set(nextSet);
}

// Función para mostrar/ocultar habilidades
toggleHabilidades() {
  this.mostrarHabilidades.set(!this.mostrarHabilidades());
}

// Función para cambiar email de contacto
cambiarContacto() {
  const emails = [
    'LUISANTONIO.TREJOSHERNANDEZ@UNITECNAR.EDU.CO',
    'luis.trejos@desarrollador.com',
    'contacto@luistrejos.dev'
  ];
  const currentIndex = emails.indexOf(this.email());
  const nextIndex = (currentIndex + 1) % emails.length;
  this.email.set(emails[nextIndex]);
}
}

