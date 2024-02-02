import { PaymentMethod } from '../domain/payment-method.model';
import useDonation from '../hooks/use-donation';
import PaymentMethods from './payment-methods';

type Props = {
  amount: number;
  paymentMethods: PaymentMethod[];
};

export default function Payment({ amount, paymentMethods }: Props) {
  const { total, tip, agreeToDonate, updateAgreeToDonate } =
    useDonation(amount);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Payment</h3>
      <div className="flex flex-col">
        <PaymentMethods paymentMethods={paymentMethods} />
      </div>
      <label htmlFor="donation" className="flex items-center gap-3">
        <input
          type="checkbox"
          onChange={updateAgreeToDonate}
          checked={agreeToDonate}
        />
        <p>
          {agreeToDonate
            ? 'Thanks for your donation.'
            : `I would like to donate $${tip} to charity.`}
        </p>
      </label>
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          ${total}
        </button>
      </div>
    </div>
  );
}
