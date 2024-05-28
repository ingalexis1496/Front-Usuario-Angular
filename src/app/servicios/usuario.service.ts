import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = environment.apiRestURL + '/usuario';


  constructor(private httpClient: HttpClient) { }

  
  
  public list(): Observable<Usuario[]> {

     return this.httpClient.get<Usuario[]>(this.usuarioURL);

  }
  public detalle(cedula: number): Observable<Usuario> {
    
    return this.httpClient.get<Usuario>(this.usuarioURL + `/${cedula}`);
   

  }
}
