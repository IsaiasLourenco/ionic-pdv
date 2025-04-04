import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importar módulos necessários do Angular
import { FormsModule } from '@angular/forms'; // Se necessário
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UsuariosPage implements OnInit {

  constructor(private adUsuario:Router) { }

  ngOnInit() {
  }
  addUsuarios(){
    this.adUsuario.navigate(['add-usuario'])
  }
}
