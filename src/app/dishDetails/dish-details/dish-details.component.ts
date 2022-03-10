import { Component, OnInit ,Input,ViewChild, Inject} from '@angular/core';
import {dish} from '../../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DishService} from '../../service/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { comment } from 'src/app/shared/comments';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { expand, visibility ,flyInOut} from '../../animation/app.animation';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss'],
  animations: [
    visibility(),
    expand(),
    flyInOut()
  ]
})
export class DishDetailsComponent implements OnInit {

  @ViewChild('commform') feedbackFormDirective;
  commentForm: FormGroup;
  comment:comment;
  formatLabel(value: number) {
   return value;
  }
  commentFormDetails(){
    this.commentForm = this.cm.group({
      author: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['',[Validators.required, Validators.minLength(2)]],
      rating: ['',Validators.required],
      date:new Date().toISOString()
    });  
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); 
  }
  formErrors = {
    'firstname': '',
    'message': ''

  };

  validationMessages = {
    'firstname': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
    'message': {
      'required':      'comment  is required.',
      'minlength':     'comment  must be at least 2 characters long.'
    }

  };

//  @Input() dish:dish;
          //or
  dish:dish;
  dishIds: string[];
  prev: string;
  next: string;
  errMess: string;
  dishcopy: dish;

  visibility = 'shown';
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,private cm: FormBuilder, @Inject('BaseURL') public BaseURL) {
      this.commentFormDetails();
     }
  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    //  this.dishservice.getDish(id).then(dishes => this.dish = dishes)
this.commentFormDetails();
     this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
     this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(params['id'])}))
     .subscribe(dish => { this.dish = dish; this.dishcopy = dish;  this.setPrevNext(dish.id);  this.visibility = 'shown'; },
     errmess => this.errMess = <any>errmess);
  }
  goBack(): void {
    this.location.back();
  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    // this.cm[0].comment = this.commentForm.value
    this.dishcopy.comments.push(this.commentForm.value);
    this.dishservice.putDish(this.dishcopy)
      .subscribe(dish => {
        this.dish = dish; this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });
    // console.log(this.dish,"dishhhhhhhhhhhhhhh");
    // this.dish.comments.push(this.commentForm.value)
    // console.log(this.commentForm.value,"this.commentForm.valuethis.commentForm.value");
      this.commentForm.reset({
        author:'',
        comment:'',
        rating:''
      })
  }
}
