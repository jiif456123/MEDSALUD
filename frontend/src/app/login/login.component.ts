import { Component, OnInit } from '@angular/core';
import { LoginService } from 'Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public usuario ='' ;
  public contra ='' ;
  public data_error;
  public token ;

  constructor(public loginservice: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm) {

        
    this.usuario = loginForm.value.usuario;
    this.contra = loginForm.value.contra;

    if ( this.contra == '' && this.contra == '') {
        this.data_error = 'los campos se encuentran vacios'
        alert(this.data_error)
    }else{

        this.loginservice.loginUsuario(this.usuario,this.contra).subscribe((res:any)=>{
            if(res=="pass incorrecta"){
                this.data_error = 'La contasena es incorrecta'
                alert(this.data_error)
            }
            else{
            
                this.token = res.token;
                localStorage.setItem('token',this.token)
                localStorage.setItem('identity',JSON.stringify(res.usuario))
            }
        })
    }
}
  

}
