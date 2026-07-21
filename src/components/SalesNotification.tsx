import React, { useState, useEffect } from "react";
import { PEPTIDES_DATA } from "../data";
import { CheckCircle } from "lucide-react";

const CITIES = ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Bristol", "Leeds", "Liverpool", "Nottingham", "Sheffield", "Cardiff"];

export default function SalesNotification() {
  const [notification, setNotification] = useState<{city: string, product: string, time: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const triggerNotification = () => {
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const product = PEPTIDES_DATA[Math.floor(Math.random() * PEPTIDES_DATA.length)].name;
      const time = Math.floor(Math.random() * 10) + 1;

      setNotification({ city, product, time: `${time} min${time > 1 ? 's' : ''} ago` });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(triggerNotification, 8000);
    const interval = setInterval(triggerNotification, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 flex items-start gap-3 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      } max-w-[280px] sm:max-w-xs w-full`}
    >
      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle className="w-4 h-4 text-emerald-600" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium mb-0.5">
          Someone in <span className="text-slate-800 font-bold">{notification.city}</span> purchased
        </p>
        <p className="text-[13px] font-bold text-teal-800 leading-snug">
          {notification.product}
        </p>
        <span className="text-[10px] text-slate-400 font-mono block mt-1.5">{notification.time}</span>
      </div>
    </div>
  );
}
