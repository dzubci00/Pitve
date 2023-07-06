import { Wrap } from "./style.js";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const VideoAerial = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <Wrap ref={ref}>
      {inView && (
        <ReactPlayer 
          className="react-player"
          url="/desktop.mov"
          width="100%"
          height="100%"
          playing
          muted
          playsInline
          loop={true}
        />
      )}
    </Wrap>
  );
};

export default VideoAerial;
