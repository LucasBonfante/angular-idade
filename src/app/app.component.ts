import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public ano: number = 0;
  public ano_atual: number = 2022;
  public resultado: number = 0;
  
  calcular() {
    this.resultado = this.ano_atual - this.ano;
}
}