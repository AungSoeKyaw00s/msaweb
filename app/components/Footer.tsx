export default function Footer() {
    return (
      <footer className="bg-secondary py-8 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Myanmar Student Association UTS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }