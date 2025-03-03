// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-user-login',
//   standalone: true,
//   //imports: [CommonModule,FormsModule],
//   templateUrl: './user-login.component.html',
//   styleUrl: './user-login.component.scss'
// })
// export class UserLoginComponent implements OnInit {
//   signupUsers : any[]=[];

//   signupObj:any = {
//     userName: '',
//     email: '',
//     password: ''
//   };
//   loginObj:any = {
//     userName: '',
//     password: ''
//   };

//   constructor(private router: Router){ }

//   ngOnInit(): void{
//     const localData = localStorage.getItem('signUpUsers');
//     if(localData != null){
//       this.signupUsers = JSON.parse(localData);
//     }
//   }

//   onSignUp(){
//     this.signupUsers.push(this.signupObj);
//     localStorage.setItem("signUpUsers", JSON.stringify(this.signupUsers));

//     this.signupObj = {
//       userName: '',
//       email: '',
//       password: ''
//     };
//   }

//   onLogin(){
//     const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password== this.loginObj.password);  
//     if(isUserExist != undefined){
//       this.router.navigate(['/home']);
//     }else{
//       alert('Wrong credentials');
//     }
// }
// }




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push({ ...this.signupObj });
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

    this.signupObj = { userName: '', email: '', password: '' };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (user) => user.userName === this.loginObj.userName && user.password === this.loginObj.password
    );

    if (isUserExist) {
      this.router.navigate(['/home']);
    } else {
      alert('Wrong credentials');
    }
  }
}
