import { Component,OnInit } from '@angular/core';
import { ExtractService } from './component2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'c2',
	templateUrl: './component2.component.html',
	providers: [ExtractService]
})

export class Component2 implements OnInit{
	statusMessage:string;
	extractData = []
	constructor(public extractService:ExtractService, public route: ActivatedRoute){}

	ngOnInit() {
        //read parameters here
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            this.getExtractData(params["id"])
        });
    }
	
	getExtractData(id){
        this.extractService.getExtractData(id)
        .subscribe(data => {
        	console.log(data)
        	this.extractData.push(data);
        },
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime'
        });
	}
}