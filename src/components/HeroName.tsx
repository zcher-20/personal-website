import Letter3DSwap from "./Letter3DSwap";

export default function HeroName({ name }: { name: string }) {
  return (
    <Letter3DSwap
      as="span"
      mainClassName="justify-center"
      frontFaceClassName="bg-white dark:bg-gray-900 dark:text-white"
      secondFaceClassName="bg-white dark:bg-gray-900 dark:text-white"
      rotateDirection="top"
      staggerDuration={0.05}
      staggerFrom="first"
      transition={{ type: "spring", damping: 27, stiffness: 110 }}
    >
      {name}
    </Letter3DSwap>
  );
}
