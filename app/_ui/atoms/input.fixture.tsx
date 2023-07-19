import { Input } from "$/_ui/atoms/input";
import React from "react";

export const Fixture = {
  basic: <Input.Basic placeholder="basic" />,
  primary: <Input.Basic placeholder="primary" color="primary" />,
  secondary: <Input.Basic placeholder="secondary" color="secondary" />,
  accent: <Input.Basic placeholder="accent" color="accent" />,
};

export default Fixture;
