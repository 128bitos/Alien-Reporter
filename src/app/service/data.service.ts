import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { DataModel } from '../model/data.model';
import 'rxjs/add/observable/throw';

//endpoint URI
const GET_MOCKY_DATA_URI: string = environment.MOCKY_URL;

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  /*Method getMockyData() use to get data from mocky.io API*/
  getMockyData() {
    return this.http.get<DataModel>(GET_MOCKY_DATA_URI)
      .pipe(
        tap(_ => {
          console.log(`Data parse from Mocky API`);
        }),
        catchError((err) => {
          // messaging and error handling here, we can do custom error handling here too..
          return Observable.throw(err)
        })
      );
  };
}
