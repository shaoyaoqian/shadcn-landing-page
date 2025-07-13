import video from "../assets/videobg.mp4";

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
