import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    var enteredEmail = formData.form.value.email;
    var enteredPassword = formData.form.value.password;

    console.log(enteredEmail, enteredPassword);
  }
}
