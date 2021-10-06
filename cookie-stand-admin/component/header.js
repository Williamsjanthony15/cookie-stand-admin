import Link from 'next/link'
import { useAuth } from '../contexts/auth'

export default function Header(props) {
  const { login, logout } = useAuth();
    return (
        <header className="flex items-center justify-between p-4 bg-green-500 text-black-100">
            <h1 className="text-4xl">Cookie Stand Admin</h1>
            <Link href='/overview'><a>Next</a></Link>
            <button
              onClick={() =>
                login(
                  process.env.NEXT_PUBLIC_USERNAME,
                  process.env.NEXT_PUBLIC_PASSWORD
                )
              }
              className=" p-2 text-white bg-gray-500 rounded"
            >
              Login
            </button>
            <button
              onClick={logout}
              className="p-2 text-white bg-gray-500 rounded"
            >
              Logout
            </button>

        </header>
    )
}