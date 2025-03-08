import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTooltipModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  mensagem: string = '';
  imagem: string = '';

  calcularIMC() {
    if (this.peso && this.altura) {
      const pesoNum = +this.peso;
      let alturaNum = +this.altura;

      alturaNum = alturaNum / 100;

      if (pesoNum && alturaNum) {
        this.imc = pesoNum / (alturaNum * alturaNum);

        if (this.imc < 18.5) {
          this.mensagem = 'Abaixo do peso';
          this.imagem = 'assets/img/abaixo_peso.png';
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
          this.mensagem = 'Peso normal';
          this.imagem = 'assets/img/peso_normal.png';
        } else if (this.imc >= 25 && this.imc < 29.9) {
          this.mensagem = 'Sobrepeso';
          this.imagem = 'assets/img/sobrepeso.png';
        } else {
          this.mensagem = 'Obesidade';
          this.imagem = 'assets/img/obesidade.png';
        }
      } else {
        this.imc = null;
        this.mensagem = 'Por favor, insira valores válidos de peso e altura.';
        this.imagem = '';
      }
    } else {
      this.imc = null;
      this.mensagem = 'Por favor, insira os valores de peso e altura.';
      this.imagem = ''; 
    }
  }
}
