import { Routes } from '@angular/router';

export default [

  {
    path:'agregar',
    loadComponent: () => import('./agregar/agregar.component').then(c => c.AgregarComponent)
  },
  {
    path:'editar/:matricula',
    loadComponent: () => import('./editar/editar.component').then(c => c.EditarComponent)
  },
  {
    path:'listaAlumnos',
    loadComponent: () => import('./alumnos/alumnos.component').then(c => c.AlumnosComponent)
  },
  {
    path:'eliminar/:matricula',
    loadComponent: () => import('./eliminar/eliminar.component').then(c => c.EliminarComponent)

  }
] as Routes;
