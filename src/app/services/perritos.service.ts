import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerroDTO } from '../../../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.apitasUrl;

@Injectable({
  providedIn: 'root'
})
export class PerritosService {

  private executeQuery<T>(query: string){
    query = URL + query;
    return this.httpClient.get<T>(query);
  }
  constructor( private httpClient: HttpClient) { }

  public getListadoPerritos(){
    return this.executeQuery<PerroDTO[]>(`/api/perros`);
  }
}
