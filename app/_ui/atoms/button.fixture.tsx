import { Button } from "$/_ui/atoms/button";
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export const Fixture = {
  basic: () => <Button.Basic>Button.Basic</Button.Basic>,
  primary: <Button.Basic color="primary">Button.Basic</Button.Basic>,
  secondary: <Button.Basic color="secondary">Button.Basic</Button.Basic>,
  back: (
    <Button.Back>
      <ChevronLeftIcon className="w-5 h-5" />
    </Button.Back>
  ),
};

export default Fixture;
