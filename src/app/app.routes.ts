import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id',
      component: UsuarioComponent,
      children:  [
        {path: 'nuevo', component: UsuarioNuevoComponent},
        {path: 'editar', component: UsuarioEditarComponent},
        {path: 'detalle', component: UsuarioDetalleComponent},
        { path: '**', component: UsuarioNuevoComponent }
    ]},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
