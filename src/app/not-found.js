import Link from "next/link";
import { Home, RotateCcw, Gamepad2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-3xl"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="mb-4 inline-block">
          <div className="bg-[#E58E27]/80 hover:bg-[#E58E27] text-black font-wallpoet rounded-lg px-4 py-1 text-md">
            GAME OVER
          </div>
        </div>

        <h1 className="font-wallpoet text-8xl md:text-9xl text-[#E58E27] mb-4">
          404
        </h1>

        <h2 className="font-wallpoet text-3xl md:text-4xl text-white mb-6">
          QUEST FAILED
        </h2>

        <p className="text-gray-400 mb-8 max-w-lg mx-auto font-wallpoet">
          The level you&apos;re looking for seems to be in another castle. The path
          you&apos;ve taken has led to a dead end.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center font-wallpoet">
          <Link
            href="/"
            className="bg-[#E58E27]/80 hover:bg-[#E58E27] text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-wallpoet">
          <Gamepad2 className="h-5 w-5" />
          <span className="text-sm">
            Pro tip: Try using the navigation menu to find what you&apos;re looking
            for.
          </span>
        </div>
      </div>
    </div>
  );
}
