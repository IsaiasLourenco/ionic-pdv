import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIs } from '../../services/api'

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddUsuarioPage implements OnInit {

  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";
  cargo: string = "";
  id: string = "";


  constructor(
    private voltar: Router, 
    private provider: APIs,
    private actRouter: ActivatedRoute,
    public toastController: ToastController,
  ) {}

  ngOnInit() {
    console.log('A aceitação do ser humano ao ser posto a prova depende do cocô!!')
    this.actRouter.params.subscribe((data:any) => {

    });
  }

  async mensagemDadosAlterados(){
    const toast = await this.toastController.create({
      message: 'Dados alterados com sucesso!',
      duration: 3000,
      color: 'success'
    });
    toast.present();
  }
  
  async mensagemErroEmDadosAlterados(){
    const toast = await this.toastController.create({
      message: 'Erro ao alterar dados!',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }

  Usuarios() {
    this.voltar.navigate(['usuarios']);
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        senha: this.senha,
        cargo: this.cargo,
      }
      this.provider.dadosApi(dados, 'usuarios/inserir.php').subscribe(data => {
        this.voltar.navigate(['usuarios']);
        this.mensagemDadosAlterados();
      });
    });
  }

  onSelectFocus() {
    const selectOptions = document.querySelectorAll('ion-select-option');
    selectOptions.forEach((option) => {
      option.removeAttribute('aria-hidden'); // Garante que o foco não seja bloqueado
    });
  }
  

  editar(){
    
  }
}
