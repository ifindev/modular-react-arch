import DonationCheckbox from '../components/donation-checkbox';
import PaymentMethods from '../components/payment-methods';
import { formatDonationMessage } from '../utils/formatter.utill';
import usePaymentViewModel from './payment.view-model';

export default function PaymentView() {
  const {
    paymentMethods,
    paymentStrategy,
    total,
    donation,
    agreeToDonate,
    updateAgreeToDonate,
    strategies,
    handleChangePaymentStrategy,
  } = usePaymentViewModel();

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Currency</h3>
      {/* Refactor this */}
      {Object.keys(strategies).map((strategy) => (
        <label
          htmlFor="donation"
          className="flex items-center gap-3"
          key={strategy}
        >
          <input
            type="checkbox"
            onChange={() => handleChangePaymentStrategy(strategy)}
            checked={paymentStrategy.getCurrency() === strategy}
          />
          <p>{strategy}</p>
        </label>
      ))}
      <h3 className="font-bold text-lg">Payment</h3>
      <div className="flex flex-col">
        <PaymentMethods paymentMethods={paymentMethods} />
      </div>
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        label={formatDonationMessage({
          donation,
          agreeToDonate,
          strategy: paymentStrategy,
        })}
      />
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          {paymentStrategy.getCurrencySign()}
          {total}
        </button>
      </div>
    </div>
  );
}
