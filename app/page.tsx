"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Volume } from "@/components/Volume";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sounds } from "@/components/Sounds";
import { Button } from "@/components/ui/button";
import { Pause, Coffee, Leaf, Trees } from "lucide-react";

type UseAudioReturnType = [boolean, () => void];

type AudioSrc = {
  sound: string;
  icon: React.ReactNode;
};

const useAudio = (url: string, volume: number): UseAudioReturnType => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

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

type AudioPlayerProps = {
  src: AudioSrc;
  isSelected: boolean;
};

const AudioPlayer = ({ src, isSelected }: AudioPlayerProps) => {
  const [volume, setVolume] = useState(50);
  const [playing, toggle] = useAudio(src.sound, volume);

  useEffect(() => {
    isSelected && toggle();
  }, []);

  return (
    <Card
      key={crypto.randomUUID()}
      onClick={toggle}
      className={`cursor-pointer ${playing ? "bg-[#e8d9cc]" : "bg-[#f5eee7]"}`}
    >
      <CardContent className="flex items-center justify-center">
        {src?.icon}
      </CardContent>
      <CardFooter>
        <Volume
          className={playing ? "bg-[#e8d9cc]" : "bg-[#f5eee7]"}
          value={volume}
          onChange={(event) => {
            setVolume((event.target as HTMLInputElement).valueAsNumber);
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  const sounds = Sounds();
  const [mode, setMode] = useState<string[]>([]);
  const relax = ["Campfire", "Night"];
  const focus = ["Cafe", "LightRain"];
  const forest = ["Birds", "Wind", "SoftRain", "River"];

  const modes = [
    { label: "Stop", icon: Pause, value: [] },
    { label: "Relax", icon: Coffee, value: relax },
    { label: "Focus", icon: Leaf, value: focus },
    { label: "Forest", icon: Trees, value: forest },
  ];

  return (
    <main className="flex items-center flex-col justify-center w-screen h-screen bg-gradient-to-br from-[#d8d8d8] via-[#e8d9cc] to-[#a9746e]">
      <h1 className="text-6xl font-serif font-bold text-[#a9746e] mb-8 leading-tight">
        mur
        <span className="text-[#5c4033]">mur</span>
      </h1>
      <div className="flex gap-4 mb-6">
        {modes.map(({ label, icon: Icon, value }) => (
          <Button
            key={label}
            className="flex items-center gap-2 bg-[#f5eee7] text-[#5c4033] hover:bg-[#e8d9cc] hover:scale-105 transition-transform duration-200"
            onClick={() => setMode(value)}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>
      <ScrollArea className="h-96 w-3/5 p-4 bg-[#f5eee7] rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {sounds.map((src) => {
            return (
              <AudioPlayer
                key={crypto.randomUUID()}
                src={src}
                isSelected={mode.includes(src.name || "")}
              />
            );
          })}
        </div>
      </ScrollArea>
      <footer className="mt-10 text-sm text-[#5c4033] opacity-70">
        made with <span className="text-red-400">♥</span> by{" "}
        <a
          href="https://yufangchiu.vercel.app/"
          className="footer-link text-[#a9746e]"
        >
          @yufangchiu
        </a>
      </footer>
    </main>
  );
}
