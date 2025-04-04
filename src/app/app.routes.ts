import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () =>
      import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () =>
      import('./add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
  }
];
