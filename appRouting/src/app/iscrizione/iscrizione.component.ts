import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iscrizione',
  templateUrl: './iscrizione.component.html',
  styleUrls: ['./iscrizione.component.css']
})
export class IscrizioneComponent implements OnInit {

  primoForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private costruttoreForm: FormBuilder) { }

  ngOnInit(): void {
    this.primoForm = this.costruttoreForm.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      messaggio: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("Errore");
    this.submitted = true;

    if (this.primoForm.invalid)
      return

    this.success = true;
  }

}