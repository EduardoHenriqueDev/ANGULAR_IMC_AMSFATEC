/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Habilitando o modo de produção (opcional)
enableProdMode();

// Inicializando a aplicação com o componente standalone
bootstrapApplication(AppComponent).catch(err => console.error(err));
