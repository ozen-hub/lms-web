import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  baseurl = environment.baseUrl;

  constructor(private http:HttpClient) {
  }

  public loadAllPrograms():Observable<any>{
   return  this.http.get(this.baseurl+'api/v1/programs');
  }

  public loadMyPrograms():Observable<any>{
    return  this.http.get(this.baseurl+'api/v1/registrations/my-list');
  }
  public loadMyPayments():Observable<any>{
    return  this.http.get(this.baseurl+'api/v1/registrations/my-payments');
  }

  public loadSubjects():Observable<any>{
    return  this.http.get(this.baseurl+'api/v1/subjects/list');
  }
}
