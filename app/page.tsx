"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/Card";
import { GiCoffeePot, GiNightSleep, GiWashingMachine } from "react-icons/gi";
import { IoRainyOutline, IoWaterOutline } from "react-icons/io5";
import { BsWind, BsAirplaneEngines } from "react-icons/bs";
import { IoMdBonfire } from "react-icons/io";
import { LuWaves } from "react-icons/lu";
import { Volume } from "@/components/Volume";
import { ScrollArea } from "@/components/ScrollArea";
// import { MdOutlineForest } from "react-icons/md";

// TODO: writing/library/change pages/street/
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

const useAudio = (url, volume) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const audioElement = new Audio(url);
    audioElement.loop = true;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
    };
  }, []);

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

const AudioPlayer = ({ src }) => {
  const [volume, setVolume] = useState(50);
  const [playing, toggle] = useAudio(src.sound, volume);

  useEffect(() => {
    console.log(volume);
  }, [volume]);

  return (
    <Card key={crypto.randomUUID()} onClick={toggle}>
      <CardContent className="flex items-center justify-center">
        {src?.icon}
      </CardContent>
      <CardFooter>
        <Volume
          className=""
          value={volume}
          onChange={(event) => {
            // event.preventDefault();
            setVolume((event.target as HTMLInputElement).valueAsNumber);
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <ScrollArea className="h-200px w-3/4 rounded-md p-4">
        <div className="flex flex-wrap gap-5">
          {icons.map((src) => {
            return <AudioPlayer key={crypto.randomUUID()} src={src} />;
          })}
        </div>
      </ScrollArea>
    </main>
  );
}
