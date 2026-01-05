"use client";

export default function Text_03() {
    return (
        <div className="flex items-center justify-center py-4">
            <h1 className="text-4xl sm:text-3xl font-black tracking-tighter floating-text text-zinc-900 dark:text-white">
                Neon Depth
            </h1>
            <style>{`
                .floating-text {
                    animation: float 3s ease-in-out infinite;
                    text-shadow: 0 0 0px rgba(139, 92, 246, 0);
                }
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0); 
                        text-shadow: 0 5px 15px rgba(139, 92, 246, 0.2);
                    }
                    50% { 
                        transform: translateY(-5px); 
                        text-shadow: 0 20px 30px rgba(139, 92, 246, 0.4);
                    }
                }
            `}</style>
        </div>
    );
}