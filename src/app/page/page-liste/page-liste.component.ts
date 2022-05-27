import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';
import { StatistiquesService } from 'src/app/services/statistiques.service';

@Component({
  selector: 'app-page-liste',
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {

 
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

  ngOnInit(): void {
  }

}
