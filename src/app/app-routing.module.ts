import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'}, /*toda vez que o servidor for vazio vai pra tela entrar */

{path: 'entrar', component: EntrarComponent}, /*Array de objetos de rotas.... criando para rota entrar*/
{path: 'cadastrar', component: CadastrarComponent},

{path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
