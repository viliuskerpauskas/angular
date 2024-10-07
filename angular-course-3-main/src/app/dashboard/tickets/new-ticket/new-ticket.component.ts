import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.form?.nativeElement);
  }

  // onSubmit(title: string, ticketText: string) {
  //   this.add.emit({ title: title, text: ticketText });
  //   this.form?.nativeElement.reset();
  // }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
