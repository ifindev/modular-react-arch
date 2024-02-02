import { PaymentMethod } from '../domain/payment-method.model';
import PaymentMethods from './payment-methods';

type Props = {
  amount: number;
  paymentMethods: PaymentMethod[];
};

export default function Payment({ amount, paymentMethods }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Payment</h3>
      <div className="flex flex-col">
        <PaymentMethods paymentMethods={paymentMethods} />
      </div>
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          ${amount}
        </button>
      </div>
    </div>
  );
}
