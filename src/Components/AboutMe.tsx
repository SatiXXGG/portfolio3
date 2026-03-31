import Img from "../assets/img.jpeg";
export default function AboutMe() {
  return (
    <article className="my-4 gap-2 flex flex-row bg-neutral-100 rounded-3xl p-3 shadow md:h-auto h-68">
      <div className="p-2 md:p-12">
        <h1 className="font-black my-1 md:my-4 md:text-3xl text-sm text-left text-purple-600 schoolbell">
          About me 👋
        </h1>
        <p className="font-bold md:text-xl text-xsm text-left">
          Im Gael Vela. Since I was a kid I have been interested in programming. I
          started learing LUAU because I liked a lot playing roblox. Then I got
          interested in Python and I have watched a course of around 40 hours to
          learn. I got interested in web development and I started learning. I like
          learning new things and I make all my efforts to work the best way I can
        </p>
      </div>
      {window.innerWidth > 768 && (
        <img
          src={Img}
          className="w-72 rounded-2xl outline-1 outline-neutral-300 md:rende"
        ></img>
      )}
    </article>
  );
}
