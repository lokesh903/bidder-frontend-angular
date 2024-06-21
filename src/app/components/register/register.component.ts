import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      mobile: [''],
      email: [''],
      username: [''],
      role: [''],
      passward: ['']
    });
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
