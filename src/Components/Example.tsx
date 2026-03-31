interface IProps {
  proj: {
    path: string;
    title: string;
    description: string;
  };
  i: number;
}

export default function RExample({ proj, i }: IProps) {
  return (
    <div
      key={i}
      className="bg-neutral-100 rounded-2xl p-4 outline-2 outline-neutral-200 flex flex-col gap-1 mx-auto md:w-96"
    >
      <iframe className="rounded-xl h-48" src={proj.path}></iframe>
      <hr className="opacity-20"></hr>
      <h2 className="font-black text-xl text-left">{proj.title}</h2>
      <p className="text-sm text-left text-black/60">{proj.description}</p>
    </div>
  );
}
