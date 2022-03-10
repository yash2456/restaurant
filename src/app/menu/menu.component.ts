import { Component, Inject, OnInit } from '@angular/core';
import { dish } from '../shared/dish'
import { DISHES } from '../shared/dishes';
import { flyInOut ,expand} from '../animation/app.animation';
import {DishService} from '../service/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class MenuComponent implements OnInit {

  constructor(private dishservice:DishService, @Inject('BaseURL') public BaseURL) { }
  dishes: dish[] ;
  // selectedDish = DISHES[0];
  selectedDish : dish;
  errMess: string;
  ngOnInit(): void {
    //   this.dishservice.getFetchData()
    // .then(dishes => this.dishes = dishes);
    this.dishservice.getFetchData()
    .subscribe((dishes) => this.dishes = dishes,
    errmess => this.errMess = <any>errmess);
  }
//   onSelect(dish:dish){
// this.selectedDish = dish;
//   }
}
