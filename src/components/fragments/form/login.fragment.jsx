"use client";

import Button from "@/components/elements/button.elements";
import Input from "../../elements/input.elements";
import { Icon } from "@iconify/react";

const Form = () => {
  return (
    <div className="flex flex-col gap-2 w-6/12">
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => console.log(e.target.value)}
        icon={<Icon icon="mdi-light:home" />}
        className="w-full"
      />
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => console.log(e.target.value)}
        icon={<Icon icon="mdi-light:home" />}
        className="w-full"
      />
      <Button
        className="btn-primary"
        onClick={() => console.log("Button clicked")}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
