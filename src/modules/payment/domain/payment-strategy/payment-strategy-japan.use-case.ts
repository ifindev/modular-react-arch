import { PaymentStrategy } from './payment-strategy.model';

export class PaymentStrategyJapan implements PaymentStrategy {
  getCurrency(): string {
    return 'JPY';
  }

  getCurrencySign(): string {
    return '¥';
  }

  getDonationAmount(amount: number): number {
    const donationPercentage = 0.1;
    return Math.floor(donationPercentage * amount);
  }

  getTotalPayment(amount: number): number {
    return amount + this.getDonationAmount(amount);
  }
}
