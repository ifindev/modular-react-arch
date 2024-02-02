import { PaymentStrategy } from './payment-strategy.model';

export class PaymentStrategAustralia implements PaymentStrategy {
  getCurrency(): string {
    return 'AUD';
  }

  getCurrencySign(): string {
    return '$';
  }

  getDonationAmount(amount: number): number {
    return parseFloat((Math.floor(amount + 1) - amount).toPrecision(10));
  }

  getTotalPayment(amount: number): number {
    return amount + this.getDonationAmount(amount);
  }
}
