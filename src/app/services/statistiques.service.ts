import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  liste : Statistique[] = [
    {
      id : "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
      titre : "Démographie en France",
      valeur: "60M",
    },
    {
      id : "2a1r5fo0-be3b-11eb-91ec-75875ectfb46",
      titre : "Démographie en Espagne",
      valeur: "50M",
    },
    {
      id : "2a1r5fo0-be3b-11eb-91ec-7rst5ectfb46",
      titre : "Démographie en Italie",
      valeur: "78M",
    }

  ];
  constructor() { }
}
