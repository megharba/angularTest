import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  tabStatistique : Statistique[] = [
    {
      id : "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
      titre : "Démographie en France",
      valeur: "60M",
    },
    {
      id : "2a1r5fo0-be3b-11eb-91ec-75875ectfb46",
      titre : "Démographie en Espagne",
      valeur: "50M",
    }
  ];
}
