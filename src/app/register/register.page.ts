import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  documentTypes = [
    {
      label: "Tarjeta de identidad",
      value: 'TI'
    },
    {
      label: "Cédula",
      value: 'CC'
    },
    {
      label: "Cédula de extranjería",
      value: 'CE'
    },
    {
      label: "Registro civil",
      value: 'RC'
    },
    {
      label: "Pasaporte",
      value: 'PS'
    },
  ]
  careers = [
    {
      label: "Ingenieria de sistemas",
      value: 0
    },
    {
      label: "Ingenieria Electronica",
      value: 1
    },
    {
      label: "Ingenieria industrial",
      value: 2
    },
    {
      label: "Administracion de empresas",
      value: 3
    },
    {
      label: "Administración Logística",
      value: 4
    }

  ]
  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService
    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(),
      last_name: new FormControl(),
      document_type: new FormControl(),
      document_number: new FormControl(),
      career: new FormControl(),
      email: new FormControl(),
      password: new FormControl(
      )
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }

}
