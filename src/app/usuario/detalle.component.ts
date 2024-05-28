import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  usuario: Usuario | undefined;

  constructor(
    private usuarioService : UsuarioService,
    private toast : ToastrService,
    private router: Router,
    private activatedRoute : ActivatedRoute



  ) { }

  ngOnInit(): void {
    this.getUsuario();
  
  }

  getUsuario() : void{
   
    const cedula = this.activatedRoute.snapshot.params.cedula;
    
    this.usuarioService.detalle(cedula).subscribe(
      data =>{
       
        this.usuario = data;
       console.log(this.usuario);
      
      
      },
     err => {


     }

    )


  }

}
