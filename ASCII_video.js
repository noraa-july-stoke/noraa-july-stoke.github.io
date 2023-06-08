//=======================================================================
//       __  __             ___     ___         __  __  _______
//  |   /  \/  ` /\ |      |__||   |__    ||\/||__)/  \|__)|/__`
//  |___\__/\__,/~~\|___   |  ||___|___   ||  ||   \__/|  \|.__/
//=======================================================================
import artFrames from "./art.js";

export const ASCIIVideo = () => {
  //==========================================
  //   VARIABLE DECLARATIONS, INITIALIZERS,
  //       STATE VARIABLE ASSIGNMENTS
  //==========================================
  const container = document.createElement("div");
  container.style.width = "450px";
  container.style.height = "450px";
  container.style.borderRadius = "50%";
  container.style.borderLeft = "2px solid white";
  container.style.borderRight = "2px solid white";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.boxShadow = "0px 0px 20px 10px rgba(255,255,255,0.3)";

  const text = document.createElement("pre");
  text.style.fontSize = "7px";
  text.style.textAlign = "center";
  text.style.whiteSpace = "pre-wrap";
  text.style.wordWrap = "break-word";
  text.style.color = "white"; // Set text color to white

  container.appendChild(text);

  //====================================
  //              FUNCTIONS
  //====================================
  const play = (frames, index = 0) => {
    text.innerHTML = frames[index];
    index = (index + 1) % frames.length;
    setTimeout(() => play(frames, index), 40);
  };

  //====================================
  //           RENDER FUNCTION
  //====================================
  const render = () => {
    const containerElement = document.querySelector(".jellyfish-container");
    if (containerElement) {
      containerElement.appendChild(container);
    }
  };

  //====================================
  //           HOOKS (SIMULATED)
  //====================================
  const simulateUseEffect = () => {
    const frames = artFrames;
    let index = 0;

    play(frames, index);
  };

  //====================================
  //           INITIALIZATION
  //====================================
  render();
  simulateUseEffect();
};
