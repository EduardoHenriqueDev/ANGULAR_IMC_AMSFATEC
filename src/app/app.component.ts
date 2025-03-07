import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar ngIf, ngFor e outras diretivas
import { FormsModule } from '@angular/forms';  // Para usar ngModel
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // Para usar o Bootstrap

@Component({
  selector: 'app-root',
  standalone: true,  // Define o componente como standalone
  imports: [CommonModule, FormsModule, NgbModule],  // Declarando os módulos necessários aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  mensagem: string = '';

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);

      if (this.imc < 18.5) {
        this.mensagem = 'Abaixo do peso';
      } else if (this.imc >= 18.5 && this.imc < 24.9) {
        this.mensagem = 'Peso normal';
      } else if (this.imc >= 25 && this.imc < 29.9) {
        this.mensagem = 'Sobrepeso';
      } else {
        this.mensagem = 'Obesidade';
      }
    } else {
      this.imc = null;
      this.mensagem = 'Por favor, insira os valores de peso e altura.';
    }
  }
}
