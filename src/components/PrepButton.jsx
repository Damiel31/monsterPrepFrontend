export default function PrepButton() {
  return (
    <div className="mt-24">
      <button
        type="button"
        className=" bg-ocean-blue text-white text-lg font-medium p-3.5 rounded-md w-full mb-6 hover:bg-blue-600"
      >
        Add Hunt
      </button>
      <button
        type="button"
        className="  bg-transparent text-secondary-color text-lg font-medium p-3.5 rounded-md w-full hover:bg-slate-200"
      >
        Clear All
      </button>
    </div>
  );
}
