import { useState, useEffect } from "react";

const bioLines = [
  "$ whoami",
  "> Shalini M",
  "",
  "$ cat about.txt",
  "> Frontend Developer | Designer | Analytical Thinker",
  "> Based in Chennai, India",
  "",
  "$ cat skills.txt",
  "> Languages: TypeScript, JavaScript, Python, Kotlin, PHP",
  "> Frameworks: React, Node.js, Firebase",
  "> Tools: Git, Figma, VS Code",
  "",
  "$ cat interests.txt",
  "> UI/UX Design",
  "> Secure Web Applications",
  "> Visual Problem Solving",
  "",
  "$ cat hobbies.txt",
  "> Watching Web Series",
  "> Playing Cricket",
  "> Experimenting with Side Projects",
  "",
  "$ echo 'Thanks for visiting!'",
  "> Thanks for visiting!",
  "",
  "$ _"
];

const TerminalWindow = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex >= bioLines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = bioLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push(currentLine.charAt(currentCharIndex));
          } else {
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          }
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, currentLine.startsWith("$") ? 50 : 20);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.startsWith("$") ? 400 : 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, isTyping]);

  const getLineClass = (line: string) => {
    if (line.startsWith("$")) return "text-green-400";
    if (line.startsWith(">")) return "text-cyan-300";
    return "text-gray-400";
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm min-h-[400px] max-h-[500px] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-gray-400 text-xs">shalini@portfolio ~ </span>
      </div>
      
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className={getLineClass(line)}>
            {line}
            {index === displayedLines.length - 1 && isTyping && (
              <span className="animate-pulse">▊</span>
            )}
          </div>
        ))}
        {!isTyping && (
          <div className="text-green-400 animate-pulse">▊</div>
        )}
      </div>
    </div>
  );
};

export default TerminalWindow;
