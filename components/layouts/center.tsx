import React, { useEffect } from "react";

const Center = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//pl22770665.profitablegatecpm.com/765b268fbc09e33e4c2583d48437ce36/invoke.js";
        script.setAttribute("data-cfasync", "false");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="container-765b268fbc09e33e4c2583d48437ce36">
                </div>
        <div className="flex flex-col h-[50vh] justify-center items-center">
            {children}
            
        </div>
    );
};

export default Center;
