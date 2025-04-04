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
    { title: 'Produtos', url: '/produtos', icon: 'cube' },
    { title: 'Estoque', url: '/estoque', icon: 'albums' },
    { title: 'Compras', url: '/compras', icon: 'card' },
    { title: 'Fornecedores', url: '/fornecedores', icon: 'person' },
    { title: 'Movimentações', url: '/movimentacoes', icon: 'wallet' },
    { title: 'Contas à Pagar', url: '/pagar', icon: 'cash' },
    { title: 'Contas à Receber', url: '/receber', icon: 'pricetag' },
    { title: 'Lista de Pedidos', url: '/listar-pedidos', icon: 'clipboard' },
   
  ];

  public menuRecep = [
    { title: 'Home', url: '/painel-recepcao', icon: 'home' },
    { title: 'Reservas', url: '/reservas', icon: 'calendar' },
    { title: 'Clientes', url: '/clientes', icon: 'people' },
    { title: 'Compras', url: '/comprasR', icon: 'card' },
    { title: 'Movimentações', url: '/movimentacoesR', icon: 'wallet' },
    { title: 'Contas à Pagar', url: '/pagarR', icon: 'cash' },
    { title: 'Contas à Receber', url: '/receberR', icon: 'pricetag' },
    { title: 'Fornecedores', url: '/fornecedoresR', icon: 'person' },
   
  ];

  public appPages = this.menuAdm; // <- Aqui está a correção  
}
