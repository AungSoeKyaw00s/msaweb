export default function Footer() {
    return (
      <footer className="bg-white/80 py-8 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-900">
              © {new Date().getFullYear()} Myanmar Student Association UTS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }