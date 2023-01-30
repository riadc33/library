import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
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
      value: 'cc'
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
      value: 'sistemas'
    },
    {
      label: "Ingenieria Electronica",
      value: 'electronica'
    },
    {
      label: "Ingenieria industrial",
      value: 'industrial'
    },
    {
      label: "Administracion de empresas",
      value: 'Administracion'
    },
    {
      label: "Administración Logística",
      value: 'Logística'
    }

  ]
  validation_message = {
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "El Password es Obligatorio" },
      { type: "minLength", message: "La contraseña debe tener almenos 5 caracteres " }
    ]
  }
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
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
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
