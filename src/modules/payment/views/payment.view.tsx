import Payment from '../components/payment';
import usePaymentViewModel from './payment.view-model';

export default function PaymentView() {
  const { amount, paymentMethods } = usePaymentViewModel();

  return <Payment amount={amount} paymentMethods={paymentMethods} />;
}
