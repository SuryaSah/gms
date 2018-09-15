import { Component,OnInit } from '@angular/core';
import { MyService } from './common.service';
import { Router } from '@angular/router';

@Component({
	selector : 'c1',
	templateUrl: './component1.component.html',
	providers: [MyService]
})

export class Component1 implements OnInit{
	statusMessage:string;
	myList = []
	constructor(public myservice:MyService, public router:Router){}

	ngOnInit() { 
		 this.getData();
	}
	
	getData(){
        this.myservice.getData()
        .subscribe(data => {
        	this.myList = data;
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
	}
	detailsPage(id){
		this.router.navigate(['/post',id]);
	}
}