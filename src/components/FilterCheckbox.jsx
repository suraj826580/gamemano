export function FilterCheckbox({ label, checked, onChange, }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer relative">
      <div className="h-5 w-5 border border-[#3A3631] rounded flex items-center justify-center bg-[#2C2824]">
        <input
          type="checkbox"
          className="opacity-0 absolute w-full h-full cursor-pointer"
          checked={checked}
          onChange={onChange}
        />
        {checked && (
          <svg
            className="w-4 h-4 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-gray-200">{label}</span>
    </label>
  );
}
