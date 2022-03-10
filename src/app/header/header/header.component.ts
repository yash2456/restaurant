import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

import { PromotionService } from '../../service/promotion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,@Inject('BaseURL') public BaseURL,private logoHeader :PromotionService) { }
logo:any;
  ngOnInit(): void {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
getHeaderLOgo(){
  this.logoHeader.getLogo().subscribe(getLogo => 
    {
      this.logo = getLogo;
      console.log(this.logo);
      
    }
    )
}
}
