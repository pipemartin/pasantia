import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})
export class InicioComponent {
  constructor(){
  }
  mensajeRealizado() {
    Swal.fire({
      icon: "success",
      title: "Proceso Realizado",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  mensajeError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrio Un Error!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
}
