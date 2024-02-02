import { PaymentStrategy } from '../domain/payment-strategy/payment-strategy.model';

export function formatDonationMessage({
  donation,
  agreeToDonate,
  strategy,
}: {
  agreeToDonate: boolean;
  donation: number;
  strategy: PaymentStrategy;
}) {
  return agreeToDonate
    ? 'Thanks for your donation.'
    : `I would like to donate ${strategy.getCurrencySign()}${donation} to charity.`;
}
