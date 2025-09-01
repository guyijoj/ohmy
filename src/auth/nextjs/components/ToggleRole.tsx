"use client";

import { toggleRole } from "@/actions/toggleRole";
import { ButtonClassic } from "../../../../components/Button";

export default function ToggleRole() {
  return (
    <div onClick={toggleRole}>
      <ButtonClassic>Toggle Role</ButtonClassic>
    </div>
  );
}
