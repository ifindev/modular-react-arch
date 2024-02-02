import { PaymentStrategAustralia } from '../domain/payment-strategy/payment-strategy-australia.use-case';
import useDonation from '../hooks/use-donation';
import usePaymentMethods from '../hooks/use-payment-methods';

export default function usePaymentViewModel() {
  const amount = 19.3;
  const strategy = new PaymentStrategAustralia();

  const { paymentMethods } = usePaymentMethods();
  const { total, donation, agreeToDonate, updateAgreeToDonate } = useDonation({
    amount,
    strategy,
  });

  return {
    paymentMethods,
    strategy,
    total,
    donation,
    agreeToDonate,
    updateAgreeToDonate,
  };
}
