interface IProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function ExperienceComponent({ title, description, color }: IProps) {
  return (
    <div className="bg-neutral-100 relative w-auto rounded-3xl shadow-sm flex flex-col py-3 px-6  gap-1  outline-neutral-200">
      <h2 style={{ color }} className="font-black text-xl md:text-4xl">
        {title}
      </h2>
      <p className="text-sm md:text-xl text-left">{description}</p>
    </div>
  );
}
