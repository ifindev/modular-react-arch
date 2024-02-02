import { useEffect, useState } from 'react';
import { getRemotePaymentMethods } from '../apis/api';
import { LocalPaymentMethod } from '../model/payment.model';

type Props = {
  amount: number;
};

export default function Payment({ amount }: Props) {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const methods = await getRemotePaymentMethods();

      if (methods.length > 0) {
        const localPaymentMethods: LocalPaymentMethod[] = methods.map(
          (method) => ({
            provider: method.name,
            label: `Pay with ${method.name}`,
          })
        );

        // Cash is mandatory option
        localPaymentMethods.push({ provider: 'cash', label: 'Pay in cash' });
        setPaymentMethods(localPaymentMethods);
      } else {
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Payment</h3>
      <div className="flex flex-col">
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
      </div>
      <div>
        <button className="bg-red-600 text-white font-bold py-1 px-3 rounded">
          ${amount}
        </button>
      </div>
    </div>
  );
}
