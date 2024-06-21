import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilityService } from './utility.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = environment.apiUrl;
  constructor( public _http: HttpClient,public utilityService:UtilityService) { }

  async postReqest(url:string, postData:any): Promise<any> {
    try {
      // await this._panelService.presentLoading();
      const data: any = await this._http
        .post(`${this.baseUrl}${url}`, postData, {
          headers: this.utilityService.setHeaders(),
        })
        .toPromise();
      if (data.ok == true && data.data) {
        // this._panelService.successToastMessage(data.message);
        return data;
      }
    } catch (error) {
      console.log('http catch error..', error);
    } finally {
      // await this._panelService.dismissLoading();
    }
  }

 async getReqest(url:string, isLoading:any): Promise<any> {
    try {
      // if (isLoading) await this._panelService.presentLoading();

      const data: any = await this._http
        .get(`${this.baseUrl}${url}`, {
          headers: this.utilityService.setHeaders(),
        })
        .toPromise();

      if (data.ok == true) return data;
    } catch (error) {
      console.log('error..', error);
    } finally {
      // if (isLoading) await this._panelService.dismissLoading();
    }
  }
}
