import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  model = {
    username: "",
    password: ""
  }

  usuarios = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "user3",
      password: "pass3"
    }
  ]

  //simular login
  login = false

  Logearse() {
    //simulando la ejecucion de una api para obtner credenciales
    const user = this.usuarios.find((u) => {
      return u.username === this.model.username && u.password === this.model.password
    })

    if (user) {
      this.login = true
      this.router.navigate(['/prueba'])
    } else {
      this.login = false
    }
  }

  constructor(private router: Router) { }
}
