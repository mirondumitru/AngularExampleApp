import { Injectable } from "@angular/core";
import { User } from "src/models/user";
import { Observable, from, of } from "rxjs";
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { map } from 'rxjs/operators';
import { RequestArgs } from "@angular/http/src/interfaces";
import { Car } from "src/classes/car";

@Injectable()
export class UsersService {
    http: Http;

    headers: any = {
        'cache-control': 'no-cache',
        'x-apikey': '5bf86d5d5dcee06a838b1824',
        'content-type': 'application/json'
    };

    employeesUrl: string = "https://testapp-5f69.restdb.io/rest/employees";

    constructor(http: Http) {
        this.http = http;
    }

    getAll(): Observable<User[]> {
        var mapToUsers = map((res:Response)=>{
            return res.json();
        });

        return mapToUsers(this.http.get(this.employeesUrl, { headers: this.headers }));
    }

    save(user: User): Observable<Response> {
        return this.http.post(this.employeesUrl, user, { headers: this.headers });
    }
}