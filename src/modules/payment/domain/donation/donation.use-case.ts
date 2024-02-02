import { DonationSummary } from './donation.type';

export function calculateDonationSummary({
  amount,
  agreeToDonate,
}: {
  agreeToDonate: boolean;
  amount: number;
}): DonationSummary {
  return {
    total: agreeToDonate ? Math.floor(amount + 1) : amount,
    tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10)),
  };
}

export function formatDonationMessage({
  tip,
  agreeToDonate,
}: {
  agreeToDonate: boolean;
  tip: number;
}) {
  return agreeToDonate
    ? 'Thanks for your donation.'
    : `I would like to donate $${tip} to charity.`;
}
