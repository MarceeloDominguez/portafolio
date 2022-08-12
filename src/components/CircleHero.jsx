import React from "react";

export default function CircleHero() {
  return (
    <div className="absolute">
      <div class="absolute top-0 -left-4 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-16 -right-8 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-56 -left-52 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="absolute -bottom-16 -left-4 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="absolute -top-0 -right-8 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-56 right-32 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-56 left-32 w-[500px] h-[500px] bg-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  );
}
