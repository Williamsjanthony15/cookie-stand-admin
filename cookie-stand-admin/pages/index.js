import Head from "next/head";
import Header from "../component/header.js";
import Main from "../component/main.js";
import { useAuth } from '../contexts/auth'
// import CreateForm from '../component/createForm.js'
// import ReportTable from "../component/reportTable.js";
// import Footer from '../component/footer.js'

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div className="bg-green-300">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/faviron.ico" />
      </Head>
      <main className="p-4 space-y-8 text-center">
        <h1 className="text-4xl">Getting Data</h1>
        {user ? (
          <>
            <h2>Welcome!{user.username}</h2>
            {/* <button
              onClick={logout}
              className="p-2 text-white bg-gray-500 rounded"
            >
              Logout
            </button> */}
            <Main />
          </>
        ) : (
          <>
            <h2>Need to log in</h2>
            {/* <button
              onClick={() =>
                login(
                  process.env.NEXT_PUBLIC_USERNAME,
                  process.env.NEXT_PUBLIC_PASSWORD
                )
              }
              className="p-2 text-white bg-gray-500 rounded"
            >
              Login
            </button> */}
          </>
        )}
      </main>
      <Header />
    </div>
  );
}
