import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiCallService{

    constructor(private httpClient: HttpClient){}
    httpOptions={
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    }

    getUniversity(): Observable<any>{
        return this.httpClient.get('http://universities.hipolabs.com/search?country=Russian+Federation&name=state&limit=10',{headers: this.httpOptions.headers})
    }

    searchUniversityByName(name: string): Observable<any>{
        return this.httpClient.get('http://universities.hipolabs.com/search?name='+name+'&limit=15')
    }

    searchUniversityByNameAndCountry(name:string, country:string): Observable<any>{
        return this.httpClient.get('http://universities.hipolabs.com/search?name='+name+'&country='+country+'&limit=10')
    }
}