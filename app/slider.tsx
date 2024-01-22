"use client";

import * as RadixSlider from "@radix-ui/react-slider";

export default function Slider() {
  return (
    <RadixSlider.Root className="relative flex h-1.5 items-center">
      <RadixSlider.Track>
        <RadixSlider.Range />
      </RadixSlider.Track>

      <RadixSlider.Thumb />
    </RadixSlider.Root>
  );
}
