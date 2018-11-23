import { Injectable } from "@angular/core";
import { User } from "src/models/user";
import { Observable } from "rxjs";
import {Http, Response} from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class UsersService {
    http: Http;

    headers: any = {
        'cache-control': 'no-cache',
        'x-apikey': '5bf86d5d5dcee06a838b1824',
        'content-type':'application/json'
    };

    url: string ="https://testapp-5f69.restdb.io/rest/employees";

    constructor(http:Http){
        this.http = http;
    }

    getAll():Observable<User[]>{
        return this.http.get(this.url, { headers: this.headers }).pipe(map(data => data.json()));
    }

    save(user: User):Observable<Response>{
        return this.http.post(this.url, user, { headers: this.headers });
    }
}