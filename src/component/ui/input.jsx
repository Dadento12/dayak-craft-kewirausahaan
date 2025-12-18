export default function Input({
  label = "Input",
  placeholder = "Input field",
  value,
  type = '',
  onChange,
}) {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-2">
      <label className="font-semibold mb-1 text-sm text-gray-700">{label}</label>
      <input
        placeholder={placeholder}
        className="rounded-xl shadow-md px-4 py-2 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-3/4 md:w-2/3"
        value={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
