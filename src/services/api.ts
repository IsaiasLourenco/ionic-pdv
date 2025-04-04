import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // ✅ Isso resolve o erro de injeção
})
export class APIs {
  server: string = 'http://localhost/apisIonic';

  constructor(private http: HttpClient) {}

  dadosApi(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let url = this.server + api;   
    return this.http.post(url, JSON.stringify(dados), httpOptions).pipe(map(res => res));
  }
}
