import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;
  constructor(private route:ActivatedRoute, private routes: Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    //this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
  }

  OnSelectNext(){
      this.propertyId += 1;
      this.routes.navigate(['property-detail',this.propertyId]);
      //this.routes.navigate(['property-detail/' + this.propertyId]); //This will make the the url to absolute path
      //this.routes.navigate(['property-detail',this.propertyId], {relativeTo: this.route}); //This will make the the url to relative path

  }

}
