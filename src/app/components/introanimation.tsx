import { useEffect, useState } from "react";
import "../styles/introanimation.css";

const IntroAnimation: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onFinish();
    }, 3000); // 3 seconds for the animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showAnimation) return null;

  return (
    <div className="intro-animation">
      <h1 className="fade-out">Aman Bhatti</h1>
    </div>
  );
};

export default IntroAnimation;
