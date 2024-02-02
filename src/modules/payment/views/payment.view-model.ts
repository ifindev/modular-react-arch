import { PaymentStrategAustralia } from '../domain/payment-strategy/payment-strategy-australia.use-case';
import usePaymentMethods from '../hooks/use-payment-methods';

export default function usePaymentViewModel() {
  const amount = 19.3;
  const paymentStrategy = new PaymentStrategAustralia();
  const { paymentMethods } = usePaymentMethods();

  return { amount, paymentMethods, paymentStrategy };
}
