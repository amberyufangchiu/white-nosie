import React from "react";
import { GiCoffeePot, GiNightSleep, GiWashingMachine } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { BsWind, BsAirplaneEngines } from "react-icons/bs";
import { IoMdBonfire } from "react-icons/io";
import { LuWaves } from "react-icons/lu";
import { PiBird } from "react-icons/pi";
import { RiBubbleChartLine } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import {
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudLightningRainFill,
} from "react-icons/bs";
import { MdOutlineDriveEta } from "react-icons/md";
import { GiRiver } from "react-icons/gi";

export const Sounds = () => {
  const config = [
    {
      name: "Cafe",
      icon: <GiCoffeePot key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Cafe.mp3",
    },
    {
      name: "Waves",
      icon: <LuWaves key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Waves.mp3",
    },
    {
      name: "Campfire",
      icon: <IoMdBonfire key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Campfire.mp3",
    },
    {
      name: "Wind",
      icon: <BsWind key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Wind.mp3",
    },
    {
      name: "Night",
      icon: <GiNightSleep key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Night.mp3",
    },
    {
      name: "AirplaneCabin",
      icon: <BsAirplaneEngines key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/AirplaneCabin.mp3",
    },
    {
      name: "WashingMachine",
      icon: <GiWashingMachine key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/WashingMachine.mp3",
    },
    {
      name: "WaterDrops",
      icon: <IoWaterOutline key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/WaterDrops.mp3",
    },
    {
      name: "Birds",
      icon: <PiBird key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Birds.mp3",
    },
    {
      name: "Bubbles",
      icon: <RiBubbleChartLine key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/Bubbles.mp3",
    },
    {
      name: "CityTrafficOutdoor",
      icon: <FaCity key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/CityTrafficOutdoor.mp3",
    },
    {
      name: "LightRain",
      icon: <BsFillCloudRainFill key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/LightRain.mp3",
    },
    {
      name: "SoftRain",
      icon: <BsFillCloudRainHeavyFill key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/SoftRain.mp3",
    },
    {
      name: "HeavyRain",
      icon: (
        <BsFillCloudLightningRainFill key={crypto.randomUUID()} size="40" />
      ),
      sound: "./sounds/HeavyRain.mp3",
    },
    {
      name: "NightDrive",
      icon: <MdOutlineDriveEta key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/NightDrive.mp3",
    },
    {
      name: "River",
      icon: <GiRiver key={crypto.randomUUID()} size="40" />,
      sound: "./sounds/River.mp3",
    },
  ];

  return config;
};
