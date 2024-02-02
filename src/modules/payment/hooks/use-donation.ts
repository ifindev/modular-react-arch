import { useMemo, useState } from 'react';
import { calculateDonationSummary } from '../domain/donation/donation.use-case';

export default function useDonation(amount: number) {
  const [agreeToDonate, setAgreeToDonate] = useState(false);

  const { total, tip } = useMemo(
    () => calculateDonationSummary({ amount, agreeToDonate }),
    [agreeToDonate, amount]
  );

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate,
  };
}
