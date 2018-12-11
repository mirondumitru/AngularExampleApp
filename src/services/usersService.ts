import { Injectable } from "@angular/core";
import { User } from "src/models/user";
import { Observable } from "rxjs";
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { map } from 'rxjs/operators';
import { RequestArgs } from "@angular/http/src/interfaces";

@Injectable()
export class UsersService {
    http: Http;

    headers: any = {
        'cache-control': 'no-cache',
        'x-apikey': '5bf86d5d5dcee06a838b1824',
        'content-type': 'application/json'
    };

    carsUrl: string = "https://testapp-5f69.restdb.io/rest/cars";
    employeesUrl: string = "https://testapp-5f69.restdb.io/rest/employees";

    constructor(http: Http) {
        this.http = http;
    }

    getEmployees(): any {
        return this.http.get(this.employeesUrl);
    }

    getCars(): any {
        return this.http.get(this.carsUrl);
    }

    getAll(): Observable<User[]> {
        var mapResponse = map((data: Response) => data.json());

        return this.http.get(this.employeesUrl, { headers: this.headers }).pipe(mapResponse);
    }

    save(user: User): Observable<Response> {
        return this.http.post(this.employeesUrl, user, { headers: this.headers });
    }
}