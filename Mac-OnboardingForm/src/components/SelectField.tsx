type Props = {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="">Choose</option>

        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
