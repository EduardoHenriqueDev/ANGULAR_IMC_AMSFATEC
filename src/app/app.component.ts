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
  imagem: string = '';  // Propriedade para armazenar o caminho da imagem

  calcularIMC() {
    if (this.peso && this.altura) {
      const pesoNum = +this.peso;
      let alturaNum = +this.altura;

      alturaNum = alturaNum / 100;  // Convertendo altura para metros

      if (pesoNum && alturaNum) {
        this.imc = pesoNum / (alturaNum * alturaNum);

        // Determinando a mensagem e a imagem baseada no IMC
        if (this.imc < 18.5) {
          this.mensagem = 'Abaixo do peso';
          this.imagem = 'src/assets/images/abaixo_peso.png';  // Caminho da imagem
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
          this.mensagem = 'Peso normal';
          this.imagem = 'src/assets/images/peso_normal.png';  // Caminho da imagem
        } else if (this.imc >= 25 && this.imc < 29.9) {
          this.mensagem = 'Sobrepeso';
          this.imagem = 'src/assets/images/sobrepeso.png';  // Caminho da imagem
        } else {
          this.mensagem = 'Obesidade';
          this.imagem = 'src/assets/images/obesidade.png';  // Caminho da imagem
        }
      } else {
        this.imc = null;
        this.mensagem = 'Por favor, insira valores válidos de peso e altura.';
        this.imagem = '';  // Limpar imagem em caso de erro
      }
    } else {
      this.imc = null;
      this.mensagem = 'Por favor, insira os valores de peso e altura.';
      this.imagem = '';  // Limpar imagem em caso de erro
    }
  }
}
