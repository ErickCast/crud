import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  msg:string="";
  hideEdit:boolean=true;
  
  productos=[
    {"nombre":"Laptop Gamer", precio:19999.99, marca:"Lenovo"},
    {"nombre":"Laptop HP", precio:19999.99, marca:"HP"},
    {"nombre":"Mouse Gamer", precio:399.99, marca:"Lenovo"}
  ];

  model:any={};
  model2:any={};

  addProduct():void{
    this.productos.push(this.model);
    this.model={};
    this.msg="Producto agregado";
  }

  deleteProduct(i):void{
    var answer=confirm("Estas seguro de querer eliminarlo?");
    if(answer){

      this.productos.splice(i,1);
      this.model2={};
    }
  }
  myvalue;
  editProduct(i):void{
    this.hideEdit=false;
    this.model2.nombre=this.productos[i].nombre;
    this.model2.precio=this.productos[i].precio;
    this.model2.marca=this.productos[i].marca;
    this.myvalue=i;
  }

  updateProduct():void{
    let i=this.myvalue;
    for(let j = 0; j<this.productos.length;j++){
      if(i==j){
        this.productos[i]=this.model2;
        this.model2={};
        this.msg="Campo actualizado";
      }
    }
  }


  
}
