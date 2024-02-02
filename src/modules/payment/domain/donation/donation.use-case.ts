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
