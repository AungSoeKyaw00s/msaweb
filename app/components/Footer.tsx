export default function Footer() {
    return (
      <footer className="bg-red-600 dark:bg-red-800 py-8 px-6 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:items-center lg:justify-between gap-4 md:flex-row">
            <p className="font-sans text-white text-md lg:text-xl">
              © {new Date().getFullYear()} Myanmar Student Association UTS. <br className="lg:hidden"></br>All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }