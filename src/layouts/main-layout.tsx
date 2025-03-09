import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router";

function MainLayout() {
     const {  i18n } = useTranslation();

       const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // 선택한 언어 저장
  };

  return (
    <>
        <div>
     {/* 상단 네비게이션 바 */}
      <nav className="w-full p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <img src={"./public/tami_favicon.png"} />
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

            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
<Link to="/playground" className="hover:text-gray-300">Playground</Link> 
          </div>
        </div>

      </nav>
      <div className="container mx-auto p-4 mt-4">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default MainLayout
