import DonationCheckbox from '../components/donation-checkbox';
import PaymentMethods from '../components/payment-methods';
import { formatDonationMessage } from '../utils/formatter.utill';
import usePaymentViewModel from './payment.view-model';

export default function PaymentView() {
  const {
    paymentMethods,
    strategy,
    total,
    donation,
    agreeToDonate,
    updateAgreeToDonate,
  } = usePaymentViewModel();

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
