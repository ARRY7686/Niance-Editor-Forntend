import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuItems] = useState([
    { name: "HOME", path: "/" },
    { name: "TEAM", path: "/team" },
    { name: "TRY IT NOW", path: "/project" },
    { name: "CONTRIBUTE", path: "/contribute" },
  ]);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-niance-bg/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-niance-text flex items-center"
          >
            Niance Editor
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`relative hover:bg-niance-card/50 text-niance-text ${
                  isActive(item.path)
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-niance-accent"
                    : ""
                }`}
                onClick={handleTabClick}
              >
                <Link to={item.path} className="cursor-pointer">
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-niance-text cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-niance-bg/95 border-t border-white/5 transform transition-transform duration-200 ease-in-out">
            <div className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`justify-start hover:bg-niance-card/50 text-niance-text relative ${
                    isActive(item.path)
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-niance-accent"
                      : ""
                  }`}
                >
                  <Link to={item.path} onClick={handleTabClick}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
