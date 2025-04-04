import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HttpClientModule]
})
export class AppComponent {
  public menuAdm = [
    { title: 'Home', url: '/folder', icon: 'home' },
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
   
  ];

  public appPages = this.menuAdm; // <- Aqui está a correção  
}
