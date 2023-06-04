import { Component } from '@angular/core';

@Component({
  selector: 'app-nassa',
  templateUrl: './nassa.component.html',
  styleUrls: ['./nassa.component.css']
})
export class NassaComponent {

  reservar!: Reservacion;
  sucursal!: Sucursal[];

  constructor(private reservarService: ReservarService){ }

  ngOnInit() {
      this.reservar = this.reservarService.nuevaReservacion();
      this.sucursal = this.reservarService.getSucursal();
  }

  nuevaReservacion(): void{
    this.reservarService.agregarReservacion(this.reservar);
    this.reservar = this.reservarService.nuevaReservacion();
  } 

}



