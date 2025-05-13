import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community'; 
import { ClientSideRowModelModule } from 'ag-grid-community'; 
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { RegisterToCourseComponent } from '../register-to-course/register-to-course.component';
import { AgChartOptions } from 'ag-charts-community';
// רישום מודולים של ag-grid
ModuleRegistry.registerModules([ ClientSideRowModelModule ]); 
export interface Registration {
  firstName: string;
  lastName: string;
  phone: string;
  id: string;
  lesson: string;
  price: number;
  paid: boolean;
}

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [AgGridModule], // מייבאים את המודולים של ag-grid ו-ag-charts
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  
  constructor(private Router: Router,private dialog: MatDialog) {
    
  }
  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'First Name',width: 120 },
    { field: 'lastName', headerName: 'Last Name' ,width: 120},
    { field: 'phone', headerName: 'Phone' ,width: 120},
    { field: 'id', headerName: 'ID' ,width: 120},
    { field: 'lesson', headerName: 'Lesson',width: 100 },
    { field: 'price', headerName: 'Price',width: 100 },
    { field: 'paid', headerName: 'Paid' ,width: 100},
    {
      field: 'details',
      width: 100,
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Details';
        button.addEventListener('click', () => {
          alert(`Details for ${params.data.firstName} ${params.data.lastName} ${params.data.phone}`);
        });
        return button;
      }
    }
  ];

  defaultColDef = {
sortable: true,
filter: true,
resizable: true,

};

  // נתוני השורות
  rowData = [
    { firstName: 'Sarah', lastName: 'Cohen', phone: '052-1234567', id: '123456789', lesson: 'Computer Science', price: 350, paid: true },
    { firstName: 'Miriam', lastName: 'Levi', phone: '054-7654321', id: '987654321', lesson: 'Physics for Beginners', price: 450, paid: false },
    { firstName: 'Chaya', lastName: 'Rosenfeld', phone: '050-1122334', id: '246813579', lesson: 'Math 101', price: 400, paid: true }
  ];
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterToCourseComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rowData = [...this.rowData, result];
        console.log('נרשם:', result);
      }
    });
  }
}
