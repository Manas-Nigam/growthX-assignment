import "./App.scss";
import * as motion from "motion/react-client";

function App() {
  const ElevateAnimation = ({ animationKey }) => {
    return (
      <motion.div
        className="mainContainer"
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3, ease: "easeInOut" }}
      >
        <motion.div
          key={animationKey}
          className="ElevateContainer"
          animate={{
            y: [100, 0],
            ease: [0, 0.25, 0.5, 0.75, 1],
          }}
          transition={{ duration: 1.2, delay: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="LogoWrapper"
            animate={{
              x: [-200, -200, 0],
              y: [-100, -100, 0],
              rotate: [0, 180, 360],
              scale: [0, 0.3, 0.5, 0.7, 1],
              opacity: [0, 0, 1],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="sparkle">
              <div className="sparkle1"></div>
              <div className="sparkle2"></div>
              <div className="sparkle3"></div>
              <div className="sparkle4"></div>
            </div>
          </motion.div>
          <motion.div className="LogoWrapper">
            <motion.div
              className="scoopFadeDiv"
              animate={{
                x: [-75, 0],
                width: [0, 200],
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            <div className="box1"></div>
            <div className="box2"></div>
            <motion.div className="scoop">
              <motion.div className="scoop1"></motion.div>
              <motion.div className="scoop2"></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.span
          className="ElevateText"
          animate={{
            y: [100, 0],
            opacity: [0, 0.25, 0.5, 0.75, 1],
            ease: [0, 0.25, 0.5, 0.75, 1],
          }}
          transition={{
            duration: 1.2,
            delay: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          ELEVATE
        </motion.span>
      </motion.div>
    );
  };

  return <ElevateAnimation />;
}

export default App;
