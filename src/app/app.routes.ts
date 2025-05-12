import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [{ path: 'registrationForm', canActivate: [authGuard], component: RegistrationFormComponent },
  { path: 'lessonsList', canActivate: [authGuard], component: LessonsListComponent },
{path:'',component:LoginFormComponent},

];
