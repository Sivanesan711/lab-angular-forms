import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab-angular-forms';

  registerForm: FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group(
        {
          firstName: ['', Validators.required, Validators.minLength(3)],
          lastName: ['', Validators.required, Validators.minLength(1)],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        },

      );
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      return;
    }


    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 3));
    console.log(JSON.stringify(this.registerForm.value, null, 3));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
