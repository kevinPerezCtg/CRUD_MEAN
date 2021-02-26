import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-autos.component.html',
  styleUrls: ['./crear-autos.component.css']
})
export class CrearAutosComponent implements OnInit {

  constructor(private router:Router,
              private autosService:AutosService) { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    marca:'',
    modelo:'',
    color:'',
    precio:''
  }

  registrar(){
    console.log("autico ",this.nuevoAuto)
    this.autosService.crearAuto(this.nuevoAuto).subscribe((resp)=>{
      console.log("resp",resp);
      this.router.navigate(['/listar'])
    },(err)=>{
      console.log(err)
    })
  }
}
