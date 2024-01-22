"use client";

import Slider from "./slider";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <form
        action={(formData) => {
          let data = Object.fromEntries(formData);

          alert(JSON.stringify(data));
        }}
        className="space-y-8 rounded"
      >
        <p className="text-sm font-medium text-white/60">Settings</p>

        <Slider />

        <input type="range" name="native-slider" className="w-full" />

        <div className="mt-5 flex items-center justify-between">
          <button
            type="submit"
            className="rounded bg-white/[.15] px-3 py-1 text-sm font-medium text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
