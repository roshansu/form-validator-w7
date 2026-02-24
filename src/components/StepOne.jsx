import React from "react";
import Input from "./Input";

export default function StepOne({ data, errors, updateField }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

      <Input
        label="First Name"
        value={data.firstName}
        onChange={(v) => updateField("firstName", v)}
        error={errors.firstName}
      />

      <Input
        label="Last Name"
        value={data.lastName}
        onChange={(v) => updateField("lastName", v)}
        error={errors.lastName}
      />

      <Input
        label="Date of Birth"
        type="date"
        value={data.dob}
        onChange={(v) => updateField("dob", v)}
        error={errors.dob}
      />
    </div>
  );
}