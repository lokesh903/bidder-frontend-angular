// src/app/material-modules.ts

// Import all Angular Material modules needed in your application
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
// Add more Angular Material modules as needed

// Export all Angular Material modules for use in AppModule or other modules
export const MATERIAL_MODULES = [
  MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule
  // Add more Angular Material modules as needed
];
