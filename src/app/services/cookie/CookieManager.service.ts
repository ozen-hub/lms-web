import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private _coolieService: CookieService) {
  }

  public tokenExists(): boolean {
    return this._coolieService.check('token');
  }

  public get(): string {
    if (this.tokenExists()) {
      return this._coolieService.get('token');
    }
    return '';
  }
  public create(token:any) {
    this._coolieService.set('token',token,10,'/')
  }
}
