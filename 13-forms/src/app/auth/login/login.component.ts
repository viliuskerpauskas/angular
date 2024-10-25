import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);
  private form = viewChild.required<NgForm>('form');

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if (savedForm) {
        const loadedForm = JSON.parse(savedForm);
        const savedEmail = loadedForm.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            );
          },
        });

      this.destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
      });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    var enteredEmail = formData.form.value.email;
    var enteredPassword = formData.form.value.password;

    console.log(formData.form);
    console.log(enteredEmail, enteredPassword);

    formData.form.reset();
  }
}
