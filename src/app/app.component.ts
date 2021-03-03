import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'deployment';
  name = ''

  constructor(private service:TestServiceService){}
  ngOnInit(): void {
    this.service.getName().subscribe((res:any)=>{
      this.name = res.name
    })
  }
}
