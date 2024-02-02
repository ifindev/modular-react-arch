import { useMemo, useState } from 'react';
import { PaymentStrategy } from '../domain/payment-strategy/payment-strategy.model';

type Args = {
  amount: number;
  strategy: PaymentStrategy;
};

export default function useDonation({ amount, strategy }: Args) {
  const [agreeToDonate, setAgreeToDonate] = useState(false);

  const { total, donation } = useMemo(
    () => ({
      total: agreeToDonate ? strategy.getTotalPayment(amount) : amount,
      donation: strategy.getDonationAmount(amount),
    }),
    [agreeToDonate, amount, strategy]
  );

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return {
    total,
    donation,
    agreeToDonate,
    updateAgreeToDonate,
  };
}
