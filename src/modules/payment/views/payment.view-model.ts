import { useCallback, useState } from 'react';
import { PaymentStrategAustralia } from '../domain/payment-strategy/payment-strategy-australia.use-case';
import { PaymentStrategyJapan } from '../domain/payment-strategy/payment-strategy-japan.use-case';
import useDonation from '../hooks/use-donation';
import usePaymentMethods from '../hooks/use-payment-methods';

// TODO: refactor add new business logics where user can choose to pay with JPY or AUD

const strategies = {
  JPY: new PaymentStrategyJapan(),
  AUD: new PaymentStrategAustralia(),
};

export default function usePaymentViewModel() {
  const amount = 19.3;

  const [paymentStrategy, setPaymentStrategy] = useState(strategies.JPY);

  const handleChangePaymentStrategy = useCallback((currency: string) => {
    setPaymentStrategy(strategies[currency as keyof typeof strategies]);
  }, []);

  const { paymentMethods } = usePaymentMethods();
  const { total, donation, agreeToDonate, updateAgreeToDonate } = useDonation({
    amount,
    strategy: paymentStrategy,
  });

  return {
    paymentMethods,
    paymentStrategy,
    total,
    donation,
    agreeToDonate,
    updateAgreeToDonate,
    strategies,
    handleChangePaymentStrategy,
  };
}
