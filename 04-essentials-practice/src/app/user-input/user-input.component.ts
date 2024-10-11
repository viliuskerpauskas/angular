import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvesment = signal('0');
  eneteredAnnualInvestment = signal('1200');
  enteredExpectedReturn = signal('8.5');
  enteredDuration = signal('20');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvesment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.eneteredAnnualInvestment(),
    });

    this.enteredInitialInvesment.set('0');
    this.eneteredAnnualInvestment.set('1200');
    this.enteredExpectedReturn.set('8.5');
    this.enteredDuration.set('20');
  }
}
