import { Container } from "$/_ui/atoms/container";
import { Button } from "$/_ui/atoms/button";
import React from "react";

export const Fixture = {
  basic: () => <Container.Basic>Container.Basic</Container.Basic>,
  floatingTop: (
    <Container.Floating position="top" className="py-5 px-6 w-screen">
      <Button.Basic>Container.Floating</Button.Basic>
    </Container.Floating>
  ),
  floatingBottom: (
    <Container.Floating position="bottom" className="py-5 px-6 w-screen">
      <Button.Basic>Container.Floating</Button.Basic>
    </Container.Floating>
  ),
};

export default Fixture;
