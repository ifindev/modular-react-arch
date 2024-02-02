type Props = {
  onChange: () => void;
  checked: boolean;
  label: string;
};

export default function DonationCheckbox({ onChange, label, checked }: Props) {
  return (
    <label htmlFor="donation" className="flex items-center gap-3">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <p>{label}</p>
    </label>
  );
}
