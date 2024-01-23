"use client";

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import * as RadixSlider from "@radix-ui/react-slider";

export default function Slider({ name }: { name?: string }) {
  return (
    <div className="group flex touch-none select-none items-center gap-3 transition-[margin] duration-[350ms] *:duration-[350ms] hover:-mx-3 hover:cursor-grab active:cursor-grab">
      <SpeakerXMarkIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
      <RadixSlider.Root
        defaultValue={[50]}
        className="relative flex h-1.5 grow items-center transition-[height] group-hover:h-4"
        name={name}
      >
        <RadixSlider.Track className="relative h-full grow overflow-hidden rounded-full bg-gray-700 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus:-isible]:outline-offset-2 group-has-[:focus-visible]:outline-sky-500">
          <RadixSlider.Range className="absolute h-full bg-gray-300 transition group-hover:bg-white group-has-[:focus-visible]:bg-white">
            <div className="absolute inset-0 bg-green-500" />
          </RadixSlider.Range>
        </RadixSlider.Track>
        <RadixSlider.Thumb />
      </RadixSlider.Root>
      <SpeakerWaveIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
    </div>
  );
}
