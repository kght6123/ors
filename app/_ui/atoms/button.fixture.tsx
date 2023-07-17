import { Button } from "$/_ui/atoms/button";
import React from "react";

export const Fixture = {
  basic: () => <Button.Basic>Button.Basic</Button.Basic>,
  info: <Button.Basic color="info">Button.Basic</Button.Basic>,
  primary: <Button.Basic color="primary">Button.Basic</Button.Basic>,
};

export default Fixture;
