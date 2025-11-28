import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Información personal
  nombre = signal('LUIS ANTONIO TREJOS HERNÁNDEZ');
  edad = signal(21);
  titulo = signal('Estudiante de Ingeniería en Sistemas');
  
  // Información académica
  universidad = signal('Universidad Tecnológica de Cartagena - UNITECNAR');
  semestre = signal('Séptimo Semestre');
  promedio = signal('4.2/5.0');
  
  // Habilidades
  habilidadesFrontend = signal(['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']);
  habilidadesBackend = signal(['Node.js', 'Python', 'Java', 'SQL', 'MongoDB']);
  habilidadesHerramientas = signal(['Git', 'GitHub', 'Docker', 'VS Code', 'Figma']);
  
  // Proyectos
  proyectos = signal([
    'Sistema de Gestión Académica - Angular & Node.js',
    'E-commerce Responsive - Bootstrap & JavaScript',
    'Aplicación de Tareas en Tiempo Real',
    'Portafolio Personal con Angular'
  ]);
  
  // Contacto
  email = signal('LUISANTONIO.TREJOSHERNANDEZ@UNITECNAR.EDU.CO');
  telefono = signal('+57 300 000 0000');
  ubicacion = signal('Cartagena, Colombia');
  linkedin = signal('linkedin.com/in/luistrejos');
  github = signal('github.com/luisantoniotrejoshernandez-gif');

  // Funciones interactivas
  cambiarVistaPerfil() {
    if (this.titulo() === 'Estudiante de Ingeniería en Sistemas') {
      this.titulo.set('Desarrollador Full Stack Junior');
    } else {
      this.titulo.set('Estudiante de Ingeniería en Sistemas');
    }
  }

  toggleHabilidadesAvanzadas = signal(false);
  mostrarMasHabilidades() {
    this.toggleHabilidadesAvanzadas.set(!this.toggleHabilidadesAvanzadas());
  }

  agregarProyecto() {
    const nuevosProyectos = [
      'API REST para Gestión de Inventarios',
      'Dashboard de Analytics con Angular',
      'Sistema de Autenticación Segura',
      'Aplicación Móvil Multiplataforma'
    ];
    const randomProyecto = nuevosProyectos[Math.floor(Math.random() * nuevosProyectos.length)];
    this.proyectos.update(proyectos => [...proyectos, randomProyecto]);
  }

  cambiarContacto() {
    const contactos = [
      'LUISANTONIO.TREJOSHERNANDEZ@UNITECNAR.EDU.CO',
      'luis.trejos@desarrollador.co',
      'contacto@luistrejos.dev'
    ];
    const indexActual = contactos.indexOf(this.email());
    const nuevoIndex = (indexActual + 1) % contactos.length;
    this.email.set(contactos[nuevoIndex]);
  }

  // Fecha actual
  fechaActual = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}