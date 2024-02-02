import { RemotePaymentMethod } from '../types/payment.type';

export async function getRemotePaymentMethods(): Promise<
  RemotePaymentMethod[]
> {
  const data: RemotePaymentMethod[] = [
    { name: 'apple', id: '1' },
    { name: 'google', id: '2' },
  ];

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
}
