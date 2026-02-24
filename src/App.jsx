import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Input from "./components/Input";
import Row from "./components/Row";


export default function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  useEffect(() => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
      if (!formData.dob) newErrors.dob = "Date of birth required";
    }

    if (step === 2) {
      if (!formData.email.includes("@")) newErrors.email = "Invalid email";
      if (formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";
      if (formData.confirmPassword !== formData.password)
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
  }, [formData, step]);

  const isStepValid = Object.keys(errors).length === 0;

  const next = () => {
    if (isStepValid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const submit = () => {
    alert("Form submitted successfully! 🎉");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300">
        <ProgressBar step={step} />

        {step === 1 && (
          <StepOne
            data={formData}
            errors={errors}
            updateField={updateField}
          />
        )}

        {step === 2 && (
          <StepTwo
            data={formData}
            errors={errors}
            updateField={updateField}
          />
        )}

        {step === 3 && <StepThree data={formData} />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={back}
              className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium"
            >
              Back
            </button>
          )}

          {step < 3 && (
            <button
              onClick={next}
              disabled={!isStepValid}
              className={`ml-auto px-6 py-2 rounded-xl font-medium shadow transition ${
                isStepValid
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          )}

          {step === 3 && (
            <button
              onClick={submit}
              className="ml-auto px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 font-medium shadow"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}