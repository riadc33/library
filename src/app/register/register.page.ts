import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

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
      value: 'ti'
    },
    {
      label: "Cédula",
      value: 'cc'
    },
    {
      label: "Cédula de extranjería",
      value: 'ce'
    },
    {
      label: "Registro civil",
      value: 'rc'
    },
    {
      label: "Pasaporte",
      value: 'ps'
    },
  ]
  careers = [
    {
      label: "Ingenieria de sistemas",
      value: 'sistemas'
    },
    {
      label: "Contaduria",
      value: 'contaduria'
    },
    {
      label: "Ingenieria industrial",
      value: 'industrial'
    },
    {
      label: "Administracion de empresas",
      value: 'administracion'
    },
    

  ]
  validation_message = {
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "El Password es Obligatorio" },
      { type: "minlength", message: "La contraseña debe tener almenos 5 caracteres " }
    ],
    name: [
      { type: "required", message: "El Nombre es Obligatorio" },
    ],
    last_name: [
      { type: "required", message: "El Apellido es Obligatorio" },
    ],
    document_type: [
      { type: "required", message: "El tipo de documento es Obligatorio" },
    ],
    document_number: [
      { type: "required", message: "El documento es Obligatorio" },
    ],
    career: [
      { type: "required", message: "la carrera es Obligatorio" },
    ]
  }
  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController: AlertController

    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl("",
      Validators.compose([
        Validators.required,

      ])
    ),
      last_name: new FormControl("",
      Validators.compose([
        Validators.required,

      ])
    ),
      document_type: new FormControl("",
      Validators.compose([
        Validators.required,

      ])
    ),
      document_number: new FormControl("",
      Validators.compose([
        Validators.required,

      ])
    ),
      career: new FormControl(
      Validators.compose([
        Validators.required,

      ])
    ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      )
    });
  }

  ngOnInit() {
  }
  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    }).catch(err => {
      console.log('err',err);
      this.presentAlert("!Ops", "hubo un error", err)

    });
  }

}
