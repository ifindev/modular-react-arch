import { getRemotePaymentMethods } from '../../../../apis/api';
import { PaymentMethod } from './payment-method.model';
import { RemotePaymentMethod } from './payment-method.type';

const payInCash = new PaymentMethod({ name: 'cash' });

export function convertPaymentMethods(
  methods: RemotePaymentMethod[]
): PaymentMethod[] {
  if (methods.length === 0) {
    return [];
  }

  const mapped: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );
  mapped.push(payInCash);

  return mapped;
}

export async function fetchPaymentMethods(): Promise<PaymentMethod[]> {
  const response = await getRemotePaymentMethods();
  return convertPaymentMethods(response);
}
