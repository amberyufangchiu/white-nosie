"use client";

import { Card, CardContent, CardFooter } from "@/components/Card";
import { GiCoffeePot } from "react-icons/gi";
import { IoRainyOutline } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { IoMdBonfire } from "react-icons/io";
import { GiNightSleep } from "react-icons/gi";
import { BsAirplaneEngines } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { LuWaves } from "react-icons/lu";
import { useEffect, useState } from "react";
// import { MdOutlineForest } from "react-icons/md";

// TODO: writing/library/change pages/street/

const useAudio = (url: string) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing && audio ? audio?.play() : audio?.pause();
  }, [playing]);

  useEffect(() => {
    audio?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function Home() {
  const icons = [
    {
      icon: <GiCoffeePot key={crypto.randomUUID()} size="40" />,
      sound: "./Cafe.mp3",
    },
    { icon: <IoRainyOutline key={crypto.randomUUID()} size="40" /> },
    { icon: <BsWind key={crypto.randomUUID()} size="40" /> },
    { icon: <IoMdBonfire key={crypto.randomUUID()} size="40" /> },
    { icon: <GiNightSleep key={crypto.randomUUID()} size="40" /> },
    { icon: <BsAirplaneEngines key={crypto.randomUUID()} size="40" /> },
    { icon: <GiWashingMachine key={crypto.randomUUID()} size="40" /> },
    { icon: <IoWaterOutline key={crypto.randomUUID()} size="40" /> },
    { icon: <LuWaves key={crypto.randomUUID()} size="40" /> },
    // <MdOutlineForest key={crypto.randomUUID()} size="40" />,
  ];
  const [playing, toggle] = useAudio("./Cafe.mp3");

  return (
    <main className="flex items-center gap-5 px-96 py-24 flex-wrap">
      {icons.map((i) => {
        return (
          <Card key={crypto.randomUUID()} onClick={toggle}>
            <CardContent className="flex items-center justify-center">
              {i?.icon}
            </CardContent>
            <CardFooter>
              {/* <audio controls src="./Cafe.mp3" /> */}
              <input id="volume" type="range" min="0" max="100" step="1" />
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
}
