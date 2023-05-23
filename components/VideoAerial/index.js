import { Wrap } from "./style.js";
import Image from "next/image";
import Up from "../../images/Planine/planinaBgGori.png";
import Down from "../../images/Planine/planinaBgDoli.png";
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
        />
      )}
    </Wrap>
  );
};

export default VideoAerial;
