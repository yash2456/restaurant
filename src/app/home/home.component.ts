import { Component, Inject, OnInit } from '@angular/core';
import {dish } from '../shared/dish';
import{ DishService} from'../service/dish.service';
import {Promotion} from '../shared/promoition';
import {PromotionService} from '../service/promotion.service';
import {leader} from '../shared/leader';
import {LeaderService} from '../service/leader.service';
import { flyInOut,expand } from '../animation/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService:LeaderService, @Inject('BaseURL') public  BaseURL) { }
  dish: dish;
  promotion: Promotion;
  leader:leader;
  errMess: string;
  ngOnInit(): void {
    //  this.dishservice.getFeatureedDish()
    //  .then(dishes => this.dish = dishes)
     this.dishservice.getFeatureedDish()
     .subscribe(dishes => this.dish = dishes,errmess => this.errMess = <any>errmess)
    // this.promotionservice.getFeaturePromotion().then(promotion => this.promotion = promotion);
    this.promotionservice.getFeaturePromotion().subscribe(promotion => this.promotion = promotion);

    // this.leader = this.leaderService.getFeatureLeader();
    this.leaderService.getFeatureLeader().subscribe(leaderDetais => this.leader =leaderDetais);

  }

}
