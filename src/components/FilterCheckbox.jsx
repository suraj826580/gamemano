export function FilterCheckbox({ label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="h-5 w-5 border border-[#3A3631] rounded flex items-center justify-center bg-[#2C2824]">
        <input type="checkbox" className="opacity-0 absolute" />
        {/* Checked state would show a checkmark here */}
      </div>
      <span className="text-gray-200">{label}</span>
    </label>
  );
}
