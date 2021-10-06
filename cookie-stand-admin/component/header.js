import Link from 'next/link'
export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-green-500 text-black-100">
            <h1 className="text-4xl">Cookie Stand Admin</h1>
            <Link href='/overview'><a>Next</a></Link>
        </header>
    )
}