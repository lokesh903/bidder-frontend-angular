import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'kiri-ative-log';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
