export default function Header(props) {
  return (
    <>
      <header className="p-4 bg-green-400 text-3x1">
        <h1 className="border-gray-400">Cookie Stand Admin</h1>
        <button className="absolute bg-gray-500 hover:bg-gray-700 text-black py-1 px-2 rounded top-2 right-5">
          Overview
        </button>
      </header>
    </>
  );
}
