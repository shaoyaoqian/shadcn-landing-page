import { Radar } from "lucide-react";

import video from "../assets/videobg.mp4";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const videobg: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Wang Xuan",
  },
  {
    icon: <Radar size={34} />,
    name: "Ma Pengfei",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
];

export const Videobg = () => {
  return (
    <section
      id="videobg"
      className="container relative overflow-hidden"
    >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-85 object-contain bg-background"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </section>
  );
};
