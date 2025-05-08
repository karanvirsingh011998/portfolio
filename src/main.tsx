import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import AnimatedCursor from "react-animated-cursor"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter basename="/portfolio"> */}
    <HashRouter basename="/">
      <App />
      <AnimatedCursor
        innerSize={6}
        outerSize={50}
        color="255, 255, 255"
        outerAlpha={0}
        innerScale={1}
        outerScale={1.5}
        outerStyle={{
          border: "3px solid rgba(255, 255, 255, 0.8)",
        }}
        clickables={[
          "a",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",

          },
        ]}
      />

    </HashRouter>
  </StrictMode>
);