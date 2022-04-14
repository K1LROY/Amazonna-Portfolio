import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { styled } from "@mui/styles";

const StepperB = styled(Stepper)({
  backgroundColor: "transparent",
});

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <StepperB activeStep={activeStep} alternativeLabel>
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </StepperB>
  );
}
