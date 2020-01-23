import { Component } from '@angular/core';
import { user } from "@seniorsistemas/senior-platform-data";
import { DadosUsuario } from './classes';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsw-hcm-start';
  userData = new DadosUsuario;


  constructor(private appService: AppService) {
    /*user.getUserData().then(response => {
      this.userData = response;
      console.log(this.userData);
    });*/

    this.getServiceUrl();

  }

  getServiceUrl() {
    this.appService.getDadosUsuario().subscribe(data => {
    console.log(data)
    this.userData = data;
  });

}

}
