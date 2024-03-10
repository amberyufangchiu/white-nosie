"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/Card";
import { Volume } from "@/components/Volume";
import { ScrollArea } from "@/components/ScrollArea";
import { Sounds } from "@/components/Sounds";

const useAudio = (url, volume) => {
  const [audio, setAudio] = useState(null);
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
      className={playing ? "bg-red-200" : undefined}
    >
      <CardContent className="flex items-center justify-center">
        {src?.icon}
      </CardContent>
      <CardFooter>
        <Volume
          className={playing ? "bg-red-200" : undefined}
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

  return (
      <div className="flex gap-2">
        <Button onClick={() => setMode([])}>Stop</Button>
        <Button onClick={() => setMode(relax)}>Relax</Button>
        <Button onClick={() => setMode(focus)}>Focus</Button>
        <Button onClick={() => setMode(forest)}>Forest</Button>
      </div>
          {sounds.map((src) => {
                isSelected={mode.includes(src.name || "")}
          })}
        </div>
      </ScrollArea>
    </main>
  );
}
