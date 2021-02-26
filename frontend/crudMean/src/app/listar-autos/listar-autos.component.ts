import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private router:Router,
              private autosService:AutosService) { }

  listAutos: any = [];            
  listAutosIni: any = [];
  autoMarca:any = '';
    
  ngOnInit(): void {
    this.autosService.listarAutos().subscribe((resp)=>{
      this.listAutos = resp;
      this.listAutosIni = resp;
    },(err)=>{
      console.log(err);
    })
  }

  eliminar(auto:any){
    this.autosService.eliminarAuto(auto).subscribe((resp)=>{
      const index = this.listAutos.indexOf(auto);
      if(index > -1){
        this.listAutos.splice(index,1);
      }
    },(err)=>{
      console.log(err);
    })
  }

  filtrar(){
    if(!this.autoMarca.length){
      this.listAutos = this.listAutosIni
    }else{
      this.listAutos = this.listAutosIni.filter((list: { marca: string | any[]; }) => list.marca.includes(this.autoMarca))
    }
  }

}
