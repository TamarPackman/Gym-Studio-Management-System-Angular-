import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { UsersDataService } from '../users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });
   constructor(private fb: FormBuilder, private usersDataService: UsersDataService,  private router:Router) { }
   
  onSubmit() {
    if (this.loginForm.valid) 
    {
const user=this.usersDataService.login(this.loginForm.value.name?this.loginForm.value.name:"", this.loginForm.value.password?this.loginForm.value.password:"");
if(user){
if(user.role==='Registration Secretary')
{
localStorage.setItem('userRole', 'Registration Secretary')
this.router.navigate(['/registrationForm'])
}
else
{
localStorage.setItem('userRole', 'Gym Teacher');
this.router.navigate(['/lessonsList']);
}

    }

     else {
      alert('Invalid username or password');
      this.loginForm.reset();
    }
}
else 
{
  alert('Form is invalid');
    this.loginForm.reset();
}
  }
  hide = signal(true);
    clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

   


}
