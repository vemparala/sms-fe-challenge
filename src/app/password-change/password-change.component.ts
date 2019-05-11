import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passwordForm: FormGroup;
  invalidSubmit: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    if (this.passwordForm.invalid) {
      return;
    }
    else {
      this.invalidSubmit = true;
    }

  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [ null, Validators.compose([
         Validators.required,
         Validators.minLength(8)])
      ],
      confirm: ['', Validators.required]
          }, {
              validator: MustMatch('password', 'confirm')
      });
  }

  get f() { return this.passwordForm.controls; }
  
}
