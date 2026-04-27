"use client"

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export const StatusBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Working hours: 12:00 PM (12) to 12:00 AM (midnight is 0, but we check up to 23:59)
      const isOpenNow = currentHour >= 12 && currentHour < 24;
      setIsOpen(isOpenNow);
    };

    checkStatus(); // Check immediately on mount
    const timer = setInterval(checkStatus, 60000); // Re-check every minute

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-widest",
        isOpen
          ? "border-green-600/30 bg-green-100 text-green-800"
          : "border-gray-400/30 bg-gray-100 text-gray-500"
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          isOpen ? "animate-pulse bg-green-500" : "bg-gray-400"
        )}
      />
      <span>{isOpen ? 'Open Now' : 'Closed Now'}</span>
    </div>
  )
}
