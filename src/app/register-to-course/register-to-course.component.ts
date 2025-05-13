import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-register-to-course',
  standalone: true,
  imports: [MatDialogModule,FormsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule],
  templateUrl: './register-to-course.component.html',
  styleUrl: './register-to-course.component.css'
})
export class RegisterToCourseComponent {
   firstName = '';
  lastName = '';
  phone = '';
  id = '';
  lesson = '';
  price = 0;
  paid = false;

  constructor(
    public dialogRef: MatDialogRef<RegisterToCourseComponent>,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  save(): void {
    const result= {
     firstName :this.firstName ,
  lastName :this.lastName ,
  phone :this.phone ,
  id :this.id ,
  lesson :this.lesson ,
  price :this.price ,
  paid:  this.paid
    };
alert('נרשם בהצלחה');
    console.log('נרשם:', result);
    this.dialogRef.close(result); // מחזיר את התוצאה לקומפוננטה הראשית

}}
