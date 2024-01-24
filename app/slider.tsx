"use client";
import React from "react";

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import * as RadixSlider from "@radix-ui/react-slider";

export default function Slider({ name }: { name?: string }) {
  const [isUsingPointer, setIsUsingPointer] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(50);

  return (
    <div>
      <div className="group flex touch-none select-none items-center gap-3 transition-[margin] duration-[350ms] *:duration-[350ms] hover:-mx-3 hover:cursor-grab active:cursor-grab">
        <SpeakerXMarkIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
        <RadixSlider.Root
          value={[internalValue]}
          onValueChange={([v]) => setInternalValue(v)}
          defaultValue={[50]}
          className="relative flex h-1.5 grow items-center transition-[height] group-hover:h-4"
          name={name}
          onPointerDown={() => setIsUsingPointer(true)}
          onBlur={() => setIsUsingPointer(false)}
        >
          <RadixSlider.Track
            className={`${
              isUsingPointer
                ? ""
                : "group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus:-isible]:outline-offset-2 group-has-[:focus-visible]:outline-sky-500"
            } relative h-full grow overflow-hidden rounded-full bg-gray-700`}
          >
            <RadixSlider.Range className="group-has-[:focus-visible] absolute h-full bg-gray-300 transition group-hover:bg-white">
              <div className="absolute inset-0 group-has-[:focus-visible]:bg-white" />
            </RadixSlider.Range>
          </RadixSlider.Track>
          <RadixSlider.Thumb />
        </RadixSlider.Root>
        <SpeakerWaveIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
      </div>
      <p className="mt-4">{internalValue}</p>
    </div>
  );
}
