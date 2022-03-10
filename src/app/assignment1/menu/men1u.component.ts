import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
const DISHES: Dish[] = [
	{
		name: 'Uthappizza',
		image: '/assets/images/uthappizza.png',
		category: 'mains',
		label: 'Hot',
		price: '425',
		description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
	},
	{
		name: 'Zucchipakoda',
		image: '/assets/images/zucchipakoda.png',
		category: 'appetizer',
		label: '',
		price: '529',
		description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
	},
	{
		name: 'Vadonut',
		image: '/assets/images/vadonut.png',
		category: 'appetizer',
		label: 'New',
		price: '458',
		description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
	},
	{
		name: 'ElaiCheese Cake',
		image: '/assets/images/elaicheesecake.png',
		category: 'dessert',
		label: '',
		price: '245',
		description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
	}
];
@Component({
  selector: 'app-men1u',
  templateUrl: './men1u.component.html',
  styleUrls: ['./men1u.component.css']
})
export class Men1uComponent implements OnInit {

  constructor() { }
  dishes = DISHES;


	selectedDish: Dish = DISHES[0];
  ngOnInit(): void {
  }

}
