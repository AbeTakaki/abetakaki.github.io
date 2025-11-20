import Link from "next/link";

export default function Header() {
  return (
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="items-center md:flex">
          <Link href="/">
            <div className="block" aria-label="トップに移動">
              Home
            </div>
          </Link>
        </div>

        <div className="flex text-sm">
          <Link href="/" className="font-medium text-gray-500 hover:text-gray-900" aria-label="Homeページに移動">
              Home
          </Link>
          <Link href="https://www.todo.udemystudyaw.com/">
            <div className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12" aria-label="Todoページに移動">
              Todo
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}