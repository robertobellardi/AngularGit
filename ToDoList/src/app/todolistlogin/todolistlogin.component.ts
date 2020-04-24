import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todolistlogin',
  templateUrl: './todolistlogin.component.html',
  styleUrls: ['./todolistlogin.component.css']
})
export class TodolistloginComponent implements OnInit {

  constructor(private data: ConfigService,private router: Router) {
   }

  ngOnInit(): void {
  }

  utenti: any;
  private _user: string;
  private _password: string;

  get user(): string {
    return this._user;
  }

  set user(valore: string) {
    this._user = valore;
  }

  get password(): string {
    return this._password;
  }

  set password(valore: string) {
    this._password = valore;
  }

  checkUser() {
    console.log("Utente ---> " + this._user);
    console.log("Password ---> " + this._password);

    this.data.getUsers()
      .subscribe(utenti => {
        console.log("Scaricamento avvenuto");
        this.utenti = utenti;

        this.utenti.forEach(item => {
          if (item["user"] == this._user)
            if (item["password"] == this._password) {
              console.log("trovato");
              this.router.navigateByUrl("lista");
            }
          console.log(item);
        });
      });
  }
}