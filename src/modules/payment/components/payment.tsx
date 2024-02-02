import { formatDonationMessage } from '../domain/donation/donation.use-case';
import { PaymentMethod } from '../domain/payment/payment-method.model';
import useDonation from '../hooks/use-donation';
import DonationCheckbox from './donation-checkbox';
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
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        label={formatDonationMessage({ tip, agreeToDonate })}
      />
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          ${total}
        </button>
      </div>
    </div>
  );
}
