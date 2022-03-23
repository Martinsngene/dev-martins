import { useSpring, animated } from "react-spring";

const SlideOut = ({ children, menu }) => {
  const slide = useSpring({ opacity: menu ? 1 : 0 });

  return <animated.div style={slide}>{children}</animated.div>;
};

export default SlideOut;
