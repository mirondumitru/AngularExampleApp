import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Car } from 'src/classes/car';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private headers: any = {
    'cache-control': 'no-cache',
    'x-apikey': '5bf86d5d5dcee06a838b1824',
    'content-type': 'application/json'
  };

  private url = "https://testapp-5f69.restdb.io/rest/cars";

  constructor(private http: Http) { }

  save(car: Car): Observable<Response> {
    return this.http.post(this.url, car, { headers: this.headers });
  }

  update(id: string, car: Car): Observable<Response> {
    return this.http.put(this.buildUrl(id), car, { headers: this.headers });
  }

  delete(id: string): Observable<Response> {
    return this.http.delete(this.buildUrl(id), { headers: this.headers });
  }

  getById(id: string): Observable<Car> {
    var mapToCar = map((res: Response) => {
      return res.json();
    });

    return mapToCar(this.http.get(this.buildUrl(id), { headers: this.headers }));
  }

  getAll(): Observable<Car[]> {
    var mapToCar = map((res: Response) => {
      return res.json();
    });

    return mapToCar(this.http.get(this.url, { headers: this.headers }));
  }

  private buildUrl(id: string): string {
    return this.url + "/" + id;
  }
}
