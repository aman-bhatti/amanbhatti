

// components/SplashScreen.tsx
import React, { useEffect, useState, useRef } from 'react';

const SplashScreen: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentTime(new Date().toString());

    const terminalLines = [
      'Aman@Linux:~$ ./AmanBhatti.sh',
      'Running AmanBhatti.sh...',
    ];

    const randomCodeLines = [
      'const portfolio = initializePortfolio();',
      'fetchProjects();',
      'prepareExperience();',
      'setupContactForm();',
      'console.log("Hello, world!");',
      'const user = { name: "Aman Bhatti", role: "Developer" };',
      'let skills = ["JavaScript", "React", "Next.js", "TypeScript"];',
      'skills.forEach(skill => console.log(skill));',
      'document.write("Welcome to my portfolio!");',
      "CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
"BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",
"BIOS-e820: [mem 0x0000000020200000-0x0000000040003fff] usable",
"BIOS-e820: [mem 0x0000000040004000-0x0000000040004fff] reserved",
"BIOS-e820: [mem 0x0000000040005000-0x00000000c9746fff] usable",
"BIOS-e820: [mem 0x00000000c9747000-0x00000000c9d47fff] ACPI NVS",
"BIOS-e820: [mem 0x00000000c9d48000-0x00000000c9d4afff] type 20",
"BIOS-e820: [mem 0x00000000c9d4b000-0x00000000c9d60fff] usable",
"BIOS-e820: [mem 0x00000000c9d61000-0x00000000c9d66fff] type 20",
"BIOS-e820: [mem 0x00000000c9d67000-0x00000000c9d68fff] usable",
"BIOS-e820: [mem 0x00000000c9d69000-0x00000000c9d72fff] type 20",
"BIOS-e820: [mem 0x00000000c9d73000-0x00000000c9f06fff] usable",
"BIOS-e820: [mem 0x00000000c9f07000-0x00000000c9f0afff] type 20",
"BIOS-e820: [mem 0x00000000c9f0b000-0x00000000c9f53fff] usable",
"BIOS-e820: [mem 0x00000000c9f54000-0x00000000c9f5afff] type 20",
"BIOS-e820: [mem 0x00000000c9f5b000-0x00000000c9f67fff] reserved",
"BIOS-e820: [mem 0x00000000c9f68000-0x00000000c9f79fff] type 20",
"BIOS-e820: [mem 0x00000000c9f7a000-0x00000000c9f7cfff] usable",
"Initializing website....",
      // Add more random lines as needed
    ];

    const typeLine = (line: string, delay: number) => {
      return new Promise<void>((resolve) => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < line.length) {
            setLines((prevLines) => [
              ...prevLines.slice(0, -1),
              prevLines[prevLines.length - 1] + line[index],
            ]);
            index++;
          } else {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    };

    const startTyping = async () => {
      for (const line of terminalLines) {
        setLines((prevLines) => [...prevLines, '']);
        await typeLine(line, 100);
      }

      for (let i = 0; i < randomCodeLines.length; i++) {
        const randomIndex = Math.floor(Math.random() * randomCodeLines.length);
        setLines((prevLines) => [...prevLines, randomCodeLines[randomIndex]]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // delay for fast printing
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }

      setLines((prevLines) => [...prevLines, 'Initializing website...']);
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
      setTimeout(() => setFadeOut(true), 2000);
    };

    startTyping();
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black text-green-500 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div ref={containerRef} className="h-full p-4 font-mono text-sm overflow-auto">
        <div className="mb-2">
          <span className="text-white">Last login: </span>
          <span>{currentTime}</span>
        </div>
        {lines.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-white">{index === 0 ? '$' : ''}</span>
            <span className="ml-2">{line}</span>
          </div>
        ))}
        <div className="flex">
          <span className="text-white">$</span>
          <span className="ml-2 animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;