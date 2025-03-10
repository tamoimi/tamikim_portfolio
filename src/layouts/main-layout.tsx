import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router";

function MainLayout() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // 선택한 언어 저장
  };

  // 🦦 이모지를 저장할 배열 (id, x좌표, delay 추가)
  const [emojis, setEmojis] = useState<{ id: number; x: number; delay: number }[]>([]);

  const handleClick = () => {
    const newEmojis = Array.from({ length: 5 }).map(() => ({
      id: Date.now() + Math.random(), // 고유 ID 생성
      x: Math.random() * 300 - 150, // X축 랜덤 위치 (-150 ~ +150)
      delay: Math.random() * 0.5, // 랜덤 딜레이 (0 ~ 0.5초)
    }));

    setEmojis((prev) => [...prev, ...newEmojis]); // 새로운 이모지 추가

    // 일정 시간이 지나면 배열에서 제거
    setTimeout(() => {
      setEmojis((prev) => prev.slice(newEmojis.length)); // 가장 오래된 이모지 삭제
    }, 2000);
  };

  return (
    <>
      <div>
        {/* 상단 네비게이션 바 */}
        <nav className="w-full p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">
              <img src={"./public/tami_favicon.png"} alt="Logo" />
            </div>
            <div className="flex space-x-4">
              {/* 🌍 언어 선택 드롭다운 메뉴 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="lg" className="cursor-pointer">
                    <Languages className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem onClick={() => changeLanguage("ko")}>
                    🇰🇷 한국어
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    🇺🇸 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
              <Button variant="ghost" size="lg" className="cursor-pointer" onClick={handleClick}>
                Release 🦦
              </Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4 mt-4 relative overflow-hidden h-screen">
          <Outlet />

          {/* 🦦 이모지 애니메이션 */}
          {emojis.map(({ id, x, delay }) => (
            <motion.div
              key={id}
              initial={{ y: 0, opacity: 1, x }}
              animate={{ y: -300, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay }}
              className="absolute text-4xl"
              style={{ left: `50%`, transform: `translateX(${x}px)` }}
            >
              🦦
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
