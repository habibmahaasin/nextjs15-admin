import FormFragment from "@/components/fragments/form/index.fragment";
import React from "react";

export default function FormPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 p-2">
        <FormFragment />
      </div>
    </div>
  );
}
