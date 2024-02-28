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

const AudioPlayer = ({ src }) => {
  const [volume, setVolume] = useState(50);
  const [playing, toggle] = useAudio(src.sound, volume);

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

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <ScrollArea className="h-200px w-3/4 rounded-md p-4">
        <div className="grid grid-cols-4 gap-4">
          {sounds.map((src) => {
            return <AudioPlayer key={crypto.randomUUID()} src={src} />;
          })}
        </div>
      </ScrollArea>
    </main>
  );
}
