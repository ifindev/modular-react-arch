import usePaymentMethods from '../hooks/use-payment-methods';

export default function usePaymentViewModel() {
  const amount = 19.3;
  const { paymentMethods } = usePaymentMethods();

  return { amount, paymentMethods };
}
