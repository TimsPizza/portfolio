import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  const [shadowUnlocked, setShadowUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem("shadowUnlocked") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onUnlock = () => setShadowUnlocked(true);
    window.addEventListener("shadow:unlocked", onUnlock);
    return () => window.removeEventListener("shadow:unlocked", onUnlock);
  }, []);
  return (
    <>
      <button
        onClick={onToggle}
        className="p-2 lg:hidden"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <IoClose
            className="h-6 w-6"
            style={{ color: "var(--theme-code-variable)" }}
          />
        ) : (
          <IoMenu
            className="h-6 w-6"
            style={{ color: "var(--theme-code-variable)" }}
          />
        )}
      </button>

      <div
        className={`fixed inset-0 z-50 transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* bg overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onToggle}
        />

        <div
          className="relative h-full w-4/5 max-w-sm"
          style={{ backgroundColor: "var(--theme-background-dark)" }}
        >
          <div className="flex h-full flex-col p-4">
            <div className="mb-8 flex items-center justify-between">
              <span style={{ color: "var(--theme-code-variable)" }}>
                peisen-jiang
              </span>
              <button onClick={onToggle} className="p-2">
                <IoClose
                  className="h-6 w-6"
                  style={{ color: "var(--theme-code-variable)" }}
                />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {[
                { to: "/landing", label: "hello" },
                { to: "/about", label: "about me" },
                { to: "/projects", label: "projects" },
                shadowUnlocked
                  ? { to: "/shadow-log", label: "shadow-log" }
                  : null,
                { to: "/contact", label: "contact" },
                { to: "/themes", label: "themes" },
              ]
                .filter(Boolean)
                .map(({ to, label }: any) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={onToggle}
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--theme-code-variable)"
                        : "var(--theme-code-comment)",
                    })}
                    className="py-2 text-lg transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
                  >
                    {label}
                  </NavLink>
                ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
