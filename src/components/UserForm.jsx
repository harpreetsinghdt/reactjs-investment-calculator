import React from "react";
import UserInput from "./UserInput";

export const UserForm = ({ input, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          type="number"
          name="initialInvestment"
          value={input.initialInvestment}
          requred="true"
          onChange={onChange}
        />
        <UserInput
          label="Annual Investment"
          type="number"
          name="annualInvestment"
          value={input.annualInvestment}
          requred="true"
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          type="number"
          name="expectedReturn"
          value={input.expectedReturn}
          requred="true"
          onChange={onChange}
        />
        <UserInput
          label="Duration"
          type="number"
          name="duration"
          value={input.duration}
          requred="true"
          onChange={onChange}
        />
      </div>
    </section>
  );
};
