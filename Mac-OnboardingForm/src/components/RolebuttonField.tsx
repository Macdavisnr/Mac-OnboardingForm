type Props = {
  label: string;
  name: string;
  value: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioField({
  label,
  name,
  value,
  selectedValue,
  onChange,
}: Props) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio" // ✅ radio, not checkbox
        name={name}
        value={value}
        checked={selectedValue === value} // ✅ check if this radio is the selected one
        onChange={onChange}
      />
      {label}
    </label>
  );
}
