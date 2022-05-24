import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() unStat! : Statistique;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  constructor() { }
  gererClic() {
    this.demandeSuppression.emit();
  }

  ngOnInit(): void {
  }

}
