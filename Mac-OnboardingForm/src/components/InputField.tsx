type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
      />
    </div>
  );
}
