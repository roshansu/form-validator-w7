import React from "react";
import Row from "./Row";

export default function StepThree({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Review Your Details</h2>
      <div className="space-y-3 bg-gray-50 p-5 rounded-2xl">
        <Row label="First Name" value={data.firstName} />
        <Row label="Last Name" value={data.lastName} />
        <Row label="Date of Birth" value={data.dob} />
        <Row label="Email" value={data.email} />
        <Row label="Password" value="••••••••" />
      </div>
    </div>
  );
}