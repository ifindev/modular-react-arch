export interface PaymentStrategy {
  getCurrencySign(): string;
  getDonationAmount(amount: number): number;
  getTotalPayment(amount: number): number;
}
