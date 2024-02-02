import { useEffect, useState } from 'react';
import { PaymentMethod } from '../domain/payment-method.model';
import { fetchPaymentMethods } from '../domain/payment-method.use-case';

export default function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethodsData = async () => {
      const methods = await fetchPaymentMethods();
      setPaymentMethods(methods);
    };

    fetchPaymentMethodsData();
  }, []);

  return { paymentMethods };
}
