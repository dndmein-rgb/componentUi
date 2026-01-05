import { cn } from "@/lib/utils";
import { Wifi } from "lucide-react";

interface Card10Props {
  creditCard?: {
    number?: string;
    holder?: string;
    expiry?: string;
  };
}

const defaultProps: Card10Props = {
  creditCard: {
    number: "**** **** **** 1234",
    holder: "John Doe",
    expiry: "12/26",
  },
};

export default function Card_10({ creditCard = defaultProps.creditCard }: Card10Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto",
        "relative rounded-2xl overflow-hidden aspect-[1.586/1] p-6", // Aspect ratio for a credit card
        "bg-white/10 backdrop-blur-xl border border-white/20",
        "shadow-2xl"
      )}
    >
        {/* Background gradient blobs */}
        <div className="absolute top-0 -left-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 -right-1/3 w-48 h-48 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <div>
                <div className="flex justify-between items-start">
                    <span className="font-bold text-lg">Bank</span>
                    <Wifi className="w-6 h-6" />
                </div>
            </div>
            <div>
                <span className="font-mono text-2xl tracking-widest">{creditCard?.number}</span>
                <div className="flex justify-between items-end mt-4">
                    <div>
                        <span className="text-xs uppercase">Card Holder</span>
                        <p className="font-medium tracking-wider">{creditCard?.holder}</p>
                    </div>
                    <div>
                        <span className="text-xs uppercase">Expires</span>
                        <p className="font-medium tracking-wider">{creditCard?.expiry}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// In your tailwind.config.js for blob animation:
/*
theme: {
  extend: {
    animation: {
        blob: "blob 7s infinite",
    },
    keyframes: {
        blob: {
            "0%": { transform: "translate(0px, 0px) scale(1)" },
            "33%": { transform: "translate(30px, -50px) scale(1.1)" },
            "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
            "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
    },
  },
},
*/
