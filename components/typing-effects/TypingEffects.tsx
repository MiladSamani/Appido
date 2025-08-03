"use client";
import React, { useState, useEffect } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number;
};

const TypingEffect = ({ text, speed = 150 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const words = text.split(" ").filter(Boolean);
    let currentWordIndex = 0;

    if (words.length === 0) return;

    setDisplayedText("");

    const intervalId = setInterval(() => {
      if (currentWordIndex < words.length) {
        const newText = words.slice(0, currentWordIndex + 1).join(" ");
        setDisplayedText(newText);
        currentWordIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p className="text-gray-800 font-medium leading-relaxed break-words">
      {displayedText}
    </p>
  );
};

export default TypingEffect;
