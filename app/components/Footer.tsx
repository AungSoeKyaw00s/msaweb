export default function Footer() {
    return (
      <footer className="bg-red-600 dark:bg-red-800 py-6 px-6 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center">
            <p className="font-sans text-white text-sm md:text-base text-center md:text-left">
              © 2024 – {new Date().getFullYear()} Myanmar Student Association UTS. All rights reserved.
            </p>
            <p className="font-sans text-white/60 text-xs md:text-sm">
              Built by <a className="text-white/80 hover:text-white transition-colors duration-200" href="https://aungsoekyaw00s.dev">Aung | Jono</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }