import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


usuarios : Usuario[]= [];

  constructor(
    private usuarioService : UsuarioService,
    private toast : ToastrService 
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios():void{
this.usuarioService.list().subscribe(
data =>{
 this.usuarios = data;
console.log(this.usuarios);
  
},
err =>{

}
 


);



  }

}
