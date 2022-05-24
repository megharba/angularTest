import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiquesService } from './services/statistiques.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  ref: StatistiquesService ;
  
  constructor(ref :StatistiquesService){
    this.ref=ref
  }
  supprimerStat(unStat : Statistique) {
    let positionStat = this.ref.liste.indexOf(unStat);
    if (positionStat != -1) {
      this.ref.liste.splice(positionStat, 1);
    }
  }
  
}
