import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_AUTH, _URL_GET_USER, _URL_SERVICES_BE } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  public postCliente(data:Object):Observable<Object>{
    return this.http.post(_URL_AUTH,data);
  }
  public getUser(id:any):Observable<any>{
    return this.http.get(_URL_GET_USER+id);
  }
}
