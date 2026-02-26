"use client";
import React, { useState } from 'react'; 
import Image from 'next/image';
import { LockIcon } from 'lucide-react';

const Sidebar = () => { 
    const [showProject, setShowProject] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    // Sửa z-40d thành z-40 và h-[100%] thành h-full
    const sidebarClassNames = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 z-40 dark:bg-black bg-white w-64`;

    return (
        <div className={sidebarClassNames}>
            <div className="flex h-full w-full flex-col justify-start">
                {/* TOP LOGO */}
                <div className="z-50 flex min-h-14 w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        NghiemLinh
                    </div>
                </div>

                {/* Menu TEAM */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    {/* Đảm bảo em đã có file logo.png trong thư mục /public */}
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <div>
                        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">MY TEAM</h3>
                        <div className="mt-1 flex items-start gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>
                
                {/* NAVBAR */}
            </div>
        </div>
    );
}

export default Sidebar;