import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import ButtonLink from "./Components/Button";
import ExperienceComponent from "./Components/Experience";
import Experience from "./data/Experience.json";
import Projects from "./data/Projects.json";
import RExample from "./Components/Example";

type Category = "web" | "roblox";

function App() {
  const [selected, setSelected] = useState<Category>("web");

  return (
    <main className="flex flex-col">
      {/* HERO */}
      <header
        id="header"
        className="sticky top-0 flex h-screen items-center justify-center z-50 overflow-hidden"
      >
        <div>
          <h1 id="heroTitle" className="text-9xl font-black text-black">
            Hello, I am
          </h1>
          <p id="heroName" className="text-9xl schoolbell text-purple-800">
            Gael Vela
          </p>
          <p className="text-sm font-light text-black/50">SCROLL DOWN</p>
        </div>
      </header>

      {/* EXPERIENCE */}
      <div className="my-4 gap-2 flex flex-col items-center ">
        <h1 className="font-black my-4">My Experience</h1>
        <div className="grid gap-4 md:grid-cols-4 grid-cols-2">
          {Experience.map((exp, i) => (
            <ExperienceComponent
              key={i}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              color={exp.color}
            />
          ))}
        </div>
      </div>

      <AboutMe />

      {/* LINKS */}
      <ul className="gap-2 flex flex-row justify-center my-6">
        <ButtonLink href="https://github.com/SatiXXGG" title="GitHub" />
        <ButtonLink
          href="https://www.roblox.com/users/409509982/profile"
          title="Roblox"
        />
        <ButtonLink
          href="https://www.paypal.com/paypalme/GaelVela592"
          title="PayPal"
        />
        <ButtonLink
          href="https://discord.com/users/573660632919048214"
          title="Discord"
        />
      </ul>

      {/* PROJECTS */}
      <div className="my-4 gap-4 flex flex-col">
        <h1 className="font-black  text-center">Some Projects</h1>
        <p className="font-light">
          Some of my projects I did around the years. I have much more as Advanced
          Melee system, character custiomization and advanced movement
        </p>
        <p className="font-light text-red-500">MAY TAKE A WHILE TO LOAD / LAG</p>

        {/* TOGGLE */}
        <button
          className="w-44 relative mx-auto h-12 rounded-2xl outline outline-neutral-200 cursor-pointer"
          onClick={() => setSelected((prev) => (prev === "web" ? "roblox" : "web"))}
        >
          <div
            className={`absolute ${
              selected === "web" ? "left-0 bg-blue-600" : "right-0 bg-purple-500"
            } top-0 h-full w-[50%] rounded-xl flex items-center justify-center transition-all duration-1000`}
          >
            <p className="font-black text-white">
              {selected === "web" ? "Web" : "Roblox"}
            </p>
          </div>
        </button>

        {/* PROJECT LIST */}
        <div className="gap-6 w-full md:max-w-3xl content-center grid grid-cols-1  md:grid-cols-2 mx-auto">
          {(selected === "web" ? Projects.web : Projects.roblox).map((proj, i) => (
            <RExample key={i} proj={proj} i={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
