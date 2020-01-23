import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//componentes que obtém os dados de autenticação da plataforma
import { service, user } from "@seniorsistemas/senior-platform-data";
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
 })
export class AppService {
  constructor(private http: HttpClient) { }

  getDadosUsuario() : Observable < any > {
    return Observable.forkJoin(
      //busca a url base e o token para montagem do request.
      Observable.fromPromise(service.getRestUrl()),
      Observable.fromPromise(user.getAuthHeader()),
    ).flatMap((values: any) => {
      const [bridgeUrl, authHeader] = values;
      let headers = new HttpHeaders({
        "Authorization": authHeader
      });
    return this.http.get < any > (`${bridgeUrl}usuarios/userManager/queries/obterMeusDados`,{headers}); ;
    });
  }
}
