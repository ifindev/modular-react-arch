import { PaymentMethod } from '../domain/payment-method/payment-method.model';
import { PaymentStrategy } from '../domain/payment-strategy/payment-strategy.model';
import useDonation from '../hooks/use-donation';
import { formatDonationMessage } from '../utils/formatter.utill';
import DonationCheckbox from './donation-checkbox';
import PaymentMethods from './payment-methods';

type Props = {
  amount: number;
  paymentMethods: PaymentMethod[];
  strategy: PaymentStrategy;
};

export default function Payment({ amount, paymentMethods, strategy }: Props) {
  const { total, donation, agreeToDonate, updateAgreeToDonate } = useDonation({
    amount,
    strategy,
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Payment</h3>
      <div className="flex flex-col">
        <PaymentMethods paymentMethods={paymentMethods} />
      </div>
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        label={formatDonationMessage({ donation, agreeToDonate, strategy })}
      />
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          {strategy.getCurrencySign()}
          {total}
        </button>
      </div>
    </div>
  );
}
