import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';  // Verifique o caminho
import { enableProdMode } from '@angular/core';

// Habilitando o modo de produção (opcional)
enableProdMode();

// Inicializando a aplicação com o AppComponent standalone
platformBrowserDynamic()
  .bootstrapModule(AppComponent)  // Não precisa de 'imports' ou 'providers' aqui
  .catch(err => console.error(err));
