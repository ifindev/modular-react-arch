import { PaymentMethod } from '../domain/payment/payment-method.model';

type Props = {
  paymentMethods: PaymentMethod[];
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
            defaultChecked={method.isDefaultMethod}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </>
  );
}
