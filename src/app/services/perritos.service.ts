import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerroDTO } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PerritosService {

  constructor( private httpClient: HttpClient) { }

  public getListadoPerritos(){
    return this.httpClient.get<PerroDTO[]>(`http://localhost:8080/api/perros`);
  }
}
