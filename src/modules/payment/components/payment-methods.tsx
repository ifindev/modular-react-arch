import { LocalPaymentMethod } from '../domain/payment.type';

type Props = {
  paymentMethods: LocalPaymentMethod[];
};

export default function PaymentMethods({ paymentMethods }: Props) {
  return (
    <>
      {paymentMethods.map((method) => (
        <label
          htmlFor={method.provider}
          key={method.provider}
          className="flex items-center gap-3"
        >
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.provider === 'cash'}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </>
  );
}
