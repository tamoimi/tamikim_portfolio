import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import About from "./about";
import Experience from "./experience";
import Project from "./project";

function Home() {
  // 이모지를 저장할 배열
  const [emojis, setEmojis] = useState<
    { id: number; angle: number; distance: number; delay: number }[]
  >([]);

  const handleClick = () => {
    const newEmojis = Array.from({ length: 10 }).map(() => {
      return {
        id: Date.now() + Math.random(),
        angle: Math.random() * 360, // 0-360도 사이의 랜덤 각도
        distance: 100 + Math.random() * 200, // 중앙에서 퍼져나갈 거리
        delay: Math.random() * 0.5, // 랜덤 딜레이
      };
    });

    setEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setEmojis((prev) => prev.slice(newEmojis.length)); // 오래된 이모지 삭제
    }, 2000);
  };

  return (
    <>
      <div className=" px-5 lg:px-40 bg-slate-100 font-Line-EN flex flex-col gap-20 lg:flex-row lg:gap-10">
        {/* 이모지 애니메이션 */}
        {emojis.map(({ id, angle, distance, delay }) => (
          <motion.div
            key={id}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos(angle * (Math.PI / 180)) * distance,
              y: Math.sin(angle * (Math.PI / 180)) * distance,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 2, ease: "easeOut", delay }}
            className="fixed text-4xl z-30"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            🐱‍🏍
          </motion.div>
        ))}
        {/* 왼쪽 sticky 영역 */}
        <div className="py-10 lg:w-[40%] lg:sticky lg:top-0 lg:h-screen lg:py-20 flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Taekyung Kim</h1>
          <h1 className="text-xl font-bold">Front End Engineer</h1>
          <h1>I turn logic into art and complexity into simplicity.</h1>
          <ul className="flex flex-wrap gap-2 items-center text-xs lg:text-sm lg:mt-10">
            <li>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/tamoimi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/tamiortami/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline">
                <a
                  href="https://instagram.com/tamoimi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline">
                <Link to="/playground">Playground</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={handleClick}
              >
                Release
              </Button>
            </li>
          </ul>
        </div>

        {/* 오른쪽 콘텐츠 영역 (스크롤 가능) */}
        <div className="lg:py-15 flex-1 lg:w-[60%] ">
          {/* About */}
          <div className="relative">
            <h2 className="sticky top-0 bg-slate-100 z-10 font-bold py-5 transition-all duration-300">
              ABOUT
            </h2>
            <About />
          </div>

          {/* Experience */}
          <div className="relative my-24">
            <h2 className="sticky top-0 bg-slate-100 z-10 font-bold py-5 transition-all duration-300">
              EXPERIENCE
            </h2>
            <Experience />
          </div>

          {/* Project */}
          <div className="relative">
            <h2 className="sticky top-0 bg-slate-100 z-10 font-bold py-5 transition-all duration-300">
              PROJECT
            </h2>
            <Project />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default Home;
