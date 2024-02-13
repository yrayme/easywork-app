import SlideOver from "@/components/SlideOver";
import React from "react";
import CreateContact from "./CreateContact";

export default function CreateContactModal() {
  return (
    <SlideOver>
      <CreateContact />
    </SlideOver>
  );
}
