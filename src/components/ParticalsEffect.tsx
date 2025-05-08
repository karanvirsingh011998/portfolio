import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HomeEffect = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: { value: "#05081c0" },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: { color: { value: "#fff" }, opacity: 1 },
            enable: false,
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: { enable: true, zIndex: 10 },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "repulse" },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 60,
                duration: 1,
                opacity: 8,
                size: 8,
                speed: 6,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            },
            links: {
              color: "random",
              distance: 100,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              bounce: false,
              direction: "top",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 3,
              straight: false,
            },

            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
              value: { min: 0.5, max: 0.9 },
            },
            shape: {
              close: true,
              fill: true,
              options: {
                character: {
                  value: [
                    "React",
                    "Next",
                    "Node",
                    "Express",
                    "Mongo",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "Typescript",
                    "Tailwind",
                    "react-query",
                    "git",
                    "npm",
                    "axios",
                    "shadcn",
                    "antd",
                    "mui",
                    "redux",
                    "formik",
                    "yup",
                    "zod",
                  ],
                  font: "Verdana",
                  style: "",
                  weight: "400",
                  fill: true,
                },
              },
              type: "char",
            },
            size: {
              value: 4,
            },
          },

          center: {
            x: 0,
            y: 0,
            mode: "percent",
            radius: 0,
          },
        }}
      />
    </div>
  );
};

export default HomeEffect;
