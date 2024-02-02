export type CountryCode = 'AU' | 'JP' | 'DK';

export type RemotePaymentMethod = {
  name: string;
  countryCode?: CountryCode;
  id?: string;
};

export type LocalPaymentMethod = {
  provider: string;
  label: string;
};
