import React from "react";

export default function Input({ label, type = "text", value, onChange, error, rightIcon }) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 transition pr-10 ${
            error
              ? "border-red-400 focus:ring-red-300"
              : "border-gray-300 focus:ring-indigo-300"
          }`}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}