interface IProps {
  proj: {
    path: string;
    title: string;
    description: string;
    interactible: boolean;
  };
  i: number;
}

export default function RExample({ proj, i }: IProps) {
  return (
    <div
      key={i}
      className="bg-neutral-100 rounded-2xl relative p-4 outline-2 outline-neutral-200 flex flex-col gap-3 mx-auto w-96"
    >
      {/* Preview */}
      <div className="overflow-hidden h-48 rounded-xl bg-black">
        <div className="w-[140%] h-[140%] scale-[0.7] origin-top-left">
          <iframe
            className={
              "w-full h-full border-0 " +
              (proj.interactible ? "" : "pointer-events-none")
            }
            src={proj.path}
            loading="lazy"
          />
        </div>
      </div>

      <hr className="opacity-20" />

      <h2 className="font-black text-xl text-left">{proj.title}</h2>
      <p className="text-sm text-left text-black/60">{proj.description}</p>

      {!proj.interactible && (
        <a
          href={proj.path}
          target="_blank"
          className="bg-purple-600 shadow font-black py-2 px-2 left-2 top-2 rounded-full outline-1 outline-purple-700-400 transition duration-300 absolute hover:scale-105 hover:outline-purple-500 active:scale-110"
        >
          🔗
        </a>
      )}
    </div>
  );
}
