"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ name: "", username: "", email: "", password: "" }}
      onSubmit={(data) => Promise({ success: true, data })}
    />
  );
};

export default SignUp;
