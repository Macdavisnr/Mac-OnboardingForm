type Props = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileUpload({ label, name, onChange }: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type="file"
        name={name}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-lg file:bg-blue-600 file:text-white file:px-4 file:py-1 file:rounded file:border-0"
      />
    </div>
  );
}
