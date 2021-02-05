//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/property/services/property.service';
import { IProperty } from '../interfaces/IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  propertyList: Array<IProperty>;
  //constructor(private http:HttpClient) { }
  constructor( private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.propertyService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.propertyList = data;
        console.log(data)
      }, error => {
        console.log(error);
      }
    )

    /*this.http.get('data/properties.json').subscribe(
      data => {
        this.propertyList = data;
        console.log(data)
      }
    )*/
  }

}
