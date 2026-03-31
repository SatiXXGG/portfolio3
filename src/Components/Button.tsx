interface IProps {
  title: string;
  href: string;
}

export default function ButtonLink({ title, href }: IProps) {
  return (
    <a href={href} target="_blank">
      <button className="bg-neutral-300 shadow text-black font-black py-2 px-4 rounded-xl outline-1 outline-neutral-400 transition duration-300 hover:scale-105 hover:outline-purple-500 active:scale-110">
        {title}
      </button>
    </a>
  );
}
