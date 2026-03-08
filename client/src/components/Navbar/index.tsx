import React from 'react';
import { Search, Settings, Bell, Menu, Sun, Moon } from 'lucide-react'; // Sửa cách import icon
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black"> 
      {/* 1. Bên trái: Thanh tìm kiếm */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className ="h-8 w-8 dark:text-white"></Menu>
          </button>
        )}
        <div className="relative flex h-min w-[200px] md:w-[300px]">
          <Search className="absolute left-[12px] top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-gray-500 dark:text-white" />
          <input 
            type="search" 
            placeholder="Search..."
            className="w-full rounded-md border-none bg-gray-100 p-2 pl-10 text-sm focus:outline-none dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* 2. Bên phải: Icons thông báo và cài đặt */}
      <div className="flex items-center gap-2 md:gap-5">
        <button onClick={() => dispatch(setIsDarkMode(!isDarkMode))} className={ 
          isDarkMode
          ? `rounded p-2 dark:hover:bg-gray-700`
          : `rounded p-2 hover:bg-gray-100`
        }>
          {isDarkMode ? (
            < Sun className="h-6 w-6 cursor-pointer text-gray-500 dark:text-white" />
          ) : (
            < Moon className="h-6 w-6 cursor-pointer text-gray-500" />
          )}
        </button>
        <Link href="/settings" 
          className ={
            isDarkMode
            ? ` h-min w-minrounded p-2 dark:hover:bg-gray-700`
            : `h-min w-minrounded p-2 hover:bg-gray-100`
          }
        >
          <Settings className="h-6 w-6 cursor-pointer text-gray-500 dark:text-white" />
        </Link>
        <button className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;