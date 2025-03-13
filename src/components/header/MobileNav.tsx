import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* 汉堡菜单按钮 */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <IoClose className="h-6 w-6" style={{ color: 'var(--theme-code-variable)' }} />
        ) : (
          <IoMenu className="h-6 w-6" style={{ color: 'var(--theme-code-variable)' }} />
        )}
      </button>

      {/* 移动端导航菜单 */}
      <div
        className={`fixed inset-0 z-50 transform lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* 背景遮罩 */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onToggle}
        />

        {/* 导航内容 */}
        <div
          className="relative w-4/5 max-w-sm h-full"
          style={{ backgroundColor: 'var(--theme-background-dark)' }}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <span style={{ color: 'var(--theme-code-variable)' }}>
                peisen-jiang
              </span>
              <button onClick={onToggle} className="p-2">
                <IoClose 
                  className="h-6 w-6"
                  style={{ color: 'var(--theme-code-variable)' }}
                />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {[
                { to: '/landing', label: 'hello' },
                { to: '/about', label: 'about me' },
                { to: '/projects', label: 'projects' },
                { to: '/contact', label: 'contact' },
                { to: '/themes', label: 'themes' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={onToggle}
                  style={({ isActive }) => ({
                    color: isActive
                      ? 'var(--theme-code-variable)'
                      : 'var(--theme-code-comment)',
                  })}
                  className="text-lg py-2 hover:text-[var(--theme-code-variable)] transition-colors duration-200"
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
