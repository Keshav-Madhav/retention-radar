"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function ModalForm() {
  return (
    <div className="absolute z-30 max-w-xl w-full h-[85dvh] pointer-events-none mx-auto md:rounded-2xl p-4 md:p-8 shadow-input bg-[#00000050] rounded-md bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-0 ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Enter the customer details below to predict churn.
      </h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

      <div className="my-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="credit">Credit Score</Label>
            <Input id="credit" placeholder="Enter Credit Score"/>
          </LabelInputContainer>
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="salary">Estimated Salary</Label>
            <Input id="salary" placeholder="Enter Salary" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4 pointer-events-auto">
          <Label htmlFor="geo">Geography</Label>
          <Input id="geo" placeholder="Enter Location" />
        </LabelInputContainer>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="Enter Age" type="number"/>
          </LabelInputContainer>
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" placeholder="Male/Female" />
          </LabelInputContainer>
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="balance">Balance</Label>
            <Input id="balance" placeholder="Enter Balance" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4 pointer-events-auto">
          <Label htmlFor="products">No. of products</Label>
          <Input id="products" placeholder="Enter Products" />
        </LabelInputContainer>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-8">
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="card">Credit Card</Label>
            <Input id="card" placeholder="Yes or No" />
          </LabelInputContainer>
          <LabelInputContainer className="pointer-events-auto">
            <Label htmlFor="active">Active Member</Label>
            <Input id="active" placeholder="Yes or No" />
          </LabelInputContainer>
        </div>

        <a href="https://retentionradar.streamlit.app/" target="_blank" className="pointer-events-auto">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Go to StreamLit &rarr;
            <BottomGradient />
          </button>
        </a>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
