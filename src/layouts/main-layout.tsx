import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Experience from "@/pages/experience";
import Home from "@/pages/home";
import Project from "@/pages/project";
import { motion } from "framer-motion";
import {  Languages } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router";

function MainLayout() {
  const { i18n } = useTranslation();

  // 🦦 이모지를 저장할 배열 (id, x좌표, delay 추가)
  const [emojis, setEmojis] = useState<
    { id: number; x: number; delay: number; startY: number }[] // startY 추가
  >([]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // 선택한 언어 저장
  };

  // 📌 이동할 섹션을 위한 useRef 생성
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  // 📌 특정 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth; // 화면 너비를 가져옵니다.

    const newEmojis = Array.from({ length: 10 }).map(() => {
      return {
        id: Date.now() + Math.random(),
        x: Math.random() * screenWidth - screenWidth / 2, // 화면 중앙을 기준으로 좌우로 랜덤 X 좌표
        delay: Math.random() * 0.5, // 랜덤 딜레이
        startY: -100, // 화면 위에서 시작 (상단에서 떨어짐)
      };
    });

    setEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setEmojis((prev) => prev.slice(newEmojis.length)); // 오래된 이모지 삭제
    }, 2000);
  };

  // 언어에 따라 폰트 클래스 변경
  const fontClass = i18n.language === "ko" ? "font-Line-KO" : "font-Line-EN";

  return (
    <>
      <div
        className={`bg-slate-200 ${fontClass}`}
        style={{ overflowX: "hidden" }}
      >
        {/* 상단 네비게이션 바 */}
        <nav className="w-full p-4 shadow-md sticky top-0 z-10 bg-slate-200">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4 items-center justify-center">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link to="/playground" className="hover:text-gray-300">
                Playground
              </Link>
           

              {/* 🦦 이모지 발사 버튼 */}
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={handleClick}
              >
                Release 🦦
              </Button>

              {/* 🌍 언어 선택 드롭다운 메뉴 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="lg" className="cursor-pointer">
                    <Languages className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem onClick={() => changeLanguage("ko")}>
                    🇰🇷 한국어 {i18n.language === "ko" ? "·" : ""}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    🇺🇸 English {i18n.language === "en" ? "·" : ""}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 🦦 이모지 애니메이션 */}
              {emojis.map(({ id, x, delay, startY }) => (
                <motion.div
                  key={id}
                  initial={{ y: startY, opacity: 1, x }} // 화면 상단에서 시작
                  animate={{ y: window.innerHeight, opacity: 0 }} // 화면 하단으로 떨어짐
                  transition={{ duration: 2, ease: "easeOut", delay }}
                  className="absolute text-4xl"
                  style={{
                    left: `50%`,
                    transform: `translateX(${x}px)`,
                  }}
                >
                  🦦
                </motion.div>
              ))}
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4 mt-4">
          <div ref={homeRef} className="container mx-auto p-4 mt-16">
            <Home />
          </div>
          <div ref={aboutRef} className="container mx-auto p-4 mt-16">
            <Experience />
          </div>
          <div ref={projectRef} className="container mx-auto p-4 mt-16">
            <Project />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
