import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

  }

  entrar(){

    this.auth.entrar(this.usuarioLogin).subscribe((resp : UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.TokenUsuario
      environment.nome = this.usuarioLogin.nomeUsuario
      environment.foto = this.usuarioLogin.fotoUsuario
      environment.id = this.usuarioLogin.idUsuario

      // Abaixo podemos ver no inspecionar que esses comandos estão funcionando globalmente
      // console.log(environment.token)
      // console.log(environment.nome)
      // console.log(environment.foto)
      // console.log(environment.id)

      this.usuarioLogin.fotoUsuario

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
