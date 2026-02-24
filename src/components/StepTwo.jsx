import React from "react";
import Input from "./Input";
import { useState } from "react";

export default function StepTwo({ data, errors, updateField }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const Eye = ({ open }) => (
    <svg
      onClick={() => (open ? setShowPass((v) => !v) : setShowConfirm((v) => !v))}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-gray-500 hover:text-indigo-600"
    >
      {open ? (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c1.272 0 2.496.216 3.629.615M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.964 0c-.533 1.366-1.41 2.6-2.536 3.605M3.536 3.536L20.464 20.464"
          />
        </>
      ) : (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      )}
    </svg>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>

      <Input
        label="Email"
        type="email"
        value={data.email}
        onChange={(v) => updateField("email", v)}
        error={errors.email}
      />

      <Input
        label="Password"
        type={showPass ? "text" : "password"}
        value={data.password}
        onChange={(v) => updateField("password", v)}
        error={errors.password}
        rightIcon={<Eye open={true} />}
      />

      <Input
        label="Confirm Password"
        type={showConfirm ? "text" : "password"}
        value={data.confirmPassword}
        onChange={(v) => updateField("confirmPassword", v)}
        error={errors.confirmPassword}
        rightIcon={<Eye open={false} />}
      />
    </div>
  );
}