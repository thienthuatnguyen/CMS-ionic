import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Storage} from "@ionic/storage";
/**
 * Api is a generic REST Api handler. Set your API url first.
 */

const reqOpts = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
}


@Injectable()
export class Api {
  url: string = 'https://testdrive-stable.waservice.net:9443/api';

  constructor(public http: HttpClient, private storeage: Storage) {
  }


  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }
   post(endpoint: string, body: any) { // 헤더는 위에 reqOpts에서 정해놓은 값을 넣음. 우리 api의 헤더는 모두 같은 고정값임.
    if(endpoint == 'Account'){
      return this.http.post(endpoint, body, reqOpts);
    }
 /*   const token = "kPX5BBMfpfGqdebIvSLbVBLg205NiFjNoctuEoxN95Or2kiK-Us1vRA4yo0usW2NNKQxKD1BH9eFRivHBsiygtW61Lhdg7f5S9CdL7kISGHmVFuwPqNEphKAnKs-Fbm7A1A8fHJfOGVrKDJWLCWZgS2-xxesFIDwL1JZe72UyWlqUrrRunvM3WMdtawuFkm21fisj0CJFHlBb8GN5qxBk6OMP8xgjsh35Q1leqFQIeaHDQYxUN4OxARtu8RF0gbgPQNtY7NZYVSZzeA7m9RWXGySupK-MDiaBICTx81-OJ4M0iNBrTa_jZQ_B4fiS72ynK8To6uxgXYYbW1yEIYtxIM_4f9tgSf71phzTa1nZATywSV6Kwf9GxkasaXWVdq4xOU_LGl3pF3Lh-mU6pK0Q3V169wNWN89ovE7yWBpKyvlsFcBax4ZD6ef_81Hai3XwW5MZJeHXVDTr-Diauw4yQA7kX9zt7B6IA1WsdEtGSPZZWKRAVV7Ihrdw813T1PXJMAIBfQMqTuTpWssCqCPew";
    reqOpts.headers = reqOpts.headers.append('Authorization','Bearer '+ token)*/
    return this.http.post(endpoint, body); //service에서 토큰값과 헤더값을 자동으로 넣어주므로.

  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
