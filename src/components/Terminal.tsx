import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands: Record<string, string> = {
  joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
  secret: "You've discovered the hidden truth: React is love, React is life!",
  ascii: "\n  (\"`-''-/\")\n  `-.  :)  .-'\n    `-.\"/.-'\n       `" + "'",
  help: "Available commands: joke, secret, ascii, time, date, inspire, riddle, fact, quote, clear, help",
  time: `Current time: ${new Date().toLocaleTimeString()}`,
  date: `Today's date: ${new Date().toLocaleDateString()}`,
  inspire: "Keep coding, keep learning, and never stop building! 🚀",
  riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? (Think before typing 'answer')",
  answer: "An echo!",
  fact: "Did you know? The first computer virus was created in 1986 and was called 'Brain'.",
  quote: "'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' – Martin Fowler"
};

const Console: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [logs, setLogs] = useState<string[]>(["Welcome to the Secret Terminal! Type 'help' to see commands."]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setLogs(["Welcome to the Secret Terminal! Type 'help' to see commands."]);
    } else {
      setLogs((prevLogs) => [...prevLogs, `> ${cmd}`, commands[cmd] || "Unknown command. Type 'help' for a list of commands."]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim().toLowerCase());
      setInput("");
    }
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <motion.div 
      className="min-h-screen bg-black text-blue-400 font-mono p-4 sm:p-6 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full max-w-2xl border border-blue-500 p-4 rounded-lg shadow-lg flex flex-col">
        <div 
          ref={logContainerRef} 
          className="h-64 sm:h-80 overflow-y-auto text-sm space-y-2 p-2 border border-blue-400 rounded-md bg-gray-900 w-full"
        >
          {logs.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex items-center w-full">
          <span className="text-blue-300">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            className="ml-2 bg-transparent border-none outline-none text-blue-400 w-full px-2 py-1"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Console;
