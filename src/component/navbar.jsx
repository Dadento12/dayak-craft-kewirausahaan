export default function Navbar() {
  return (
    <nav className="w-full bg-amber-300 shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h1 className="text-xl font-bold text-gray-800 text-center sm:text-left">
        Craft Dayak
      </h1>

      <div className="flex w-full sm:w-auto justify-center sm:justify-end">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full sm:w-64 px-4 py-2 rounded-l-xl border bg-gray-200 border-gray-300 focus:outline-none"
        />
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-r-xl hover:bg-gray-900 transition-all"
        >
          Cari
        </button>
      </div>
    </nav>
  );
}
