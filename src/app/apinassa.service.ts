

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApinassaService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  enviarFecha(fecha: string) {
    const url = ' https://api.nasa.gov/planetary/apod/fecha'; // Reemplaza con la URL de tu servidor Node.js
    const body = { fecha: fecha };
  
    this.http.post(url, body).subscribe(
      () => {
        console.log('Fecha enviada correctamente');
      },
      (error) => {
        console.error('Error al enviar la fecha:', error);
      }
    );
  }

  
}

