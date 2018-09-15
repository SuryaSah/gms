import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class ExtractService {
	private _url = 'https://jsonplaceholder.typicode.com/posts';
	private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
	constructor(private _http:Http){}
	 handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
	getExtractData(id) : Observable<any[]> {
		console.log("server id is",id)
		return this._http.get(this._url+"/"+id)
        	.map((response:Response)=> <any[]> response.json())
        	.catch(this.handleError);
	}
}