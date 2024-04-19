import ReactDOM from "react-dom/client";
import "./styles/index.css";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-foreground text-3xl md:text-6xl font-bold text-center uppercase">
          React and Shadcn Template
        </div>
        <div className="font-extralight text-white m-4 md:text-md dark:text-neutral-200 py-4 text-center inline-block text-foreground rounded-lg bg-[#423428]/70 px-3 py-1 text-sm dark:bg-gray-800">
          Kickstart React projects with Shadcn-UI's sleek, customizable
          components and templates.
        </div>
        <Button
          variant={"expandIcon"}
          iconPlacement="right"
          Icon={ArrowRightIcon}
          className="bg-foreground dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          Customize your template
        </Button>
      </div>
    </div>
  </React.StrictMode>
);
