import { Injectable } from '@angular/core';
import { Statistique, StatistiqueAPI } from '../models/statistique';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  liste : Statistique[] = [];

  constructor(private http : HttpClient) {
    
    this.http.get<StatistiqueAPI[]>('https://stats.naminilamy.fr').subscribe(
      res =>{
        for(const s of res){
          this.liste.push({
            valeur: s.value,
            id : s.id,
            updatedAt: s.updatedAt,
            titre : s.title,
          })

        }       
      }
    )

    console.log(this.liste)
  }
   



}
