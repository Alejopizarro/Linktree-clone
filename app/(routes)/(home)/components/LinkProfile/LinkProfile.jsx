"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LinkProfile() {
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}/alejotest`;

    navigator.clipboard.writeText(url);

    setIsCopiedLink(true);
  };

  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-col justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>Your TreeClone is live: </span>
          {window.location.origin}@AlejoTest
        </span>
        <Button
          variant="outline"
          onClick={copyLink}
          className="rounded-full px-4 bg-white font-semibold text-xs md:text-[16px]"
        >
          {isCopiedLink ? "Copied" : "Copy your Tree URL"}
        </Button>
      </div>
    </div>
  );
}
