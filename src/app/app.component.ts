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
  ref: StatistiquesService = new StatistiquesService;
  tabStatistique: Statistique[] = this.ref.liste;

  
}
