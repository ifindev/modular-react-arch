export interface PaymentStrategy {
  getCurrency(): string;
  getCurrencySign(): string;
  getDonationAmount(amount: number): number;
  getTotalPayment(amount: number): number;
}
