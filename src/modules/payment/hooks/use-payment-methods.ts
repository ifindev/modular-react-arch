import { useEffect, useState } from 'react';
import { getRemotePaymentMethods } from '../../../apis/api';
import { LocalPaymentMethod } from '../domain/payment.type';

export default function usePaymentMethods() {
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

  return { paymentMethods };
}
