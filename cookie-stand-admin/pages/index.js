import Head from "next/head";
import Header from "../component/header.js";
import Main from "../component/main.js";
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
// import CreateForm from '../component/createForm.js'
// import ReportTable from "../component/reportTable.js";
// import Footer from '../component/footer.js'

export default function Home() {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
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
            <button onClick={logout} className="p-2 text-white bg-gray-500 rounded">logout</button>
            <StandCreateForm onCreate={createResource} />
            <Standlist stands={resources} loading={loading} onDelete={deleteResource} />
            <Main />
          </>
        ) : (
          <>
            <h2>Need to log in</h2>
            <button onClick={() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 text-white bg-grey-500 rounded">Login</button>
          </>
        )}
      </main>
      <Header />
    </div>
  );
}

function Standlist({ stands, loading, onDelete }) {
  if (loading) return <p>loading...</p>

  return<ul>
    {stands?.map(stand => (
      <li key={stand.id} className="space-x-2">
        <span>{stand.location}</span>
        <span onClick={() => onDelete(stand.id)}>[x]</span>
      </li>
    ))}
  </ul>
}

function StandCreateForm({onCreate}) {
  function handleSubmit(event) {
    event.preventDefault();
    const standInfo = {
      location: event.target.location.value, 
      minimum_customers_per_hour: parseInt(event.target.min.value),
      maximum_customers_per_hour: parseInt(event.target.max.value),
      average_cookies_per_sale: parseInt(event.target.average.value),
    }
    onCreate(standInfo);
    event.target.reset();
  }
  return(
    <form onSubmit={ handleSubmit}>
      <input className="boarder-2 border-black" name="location" placeholder="location" />
      <input className="boarder-2 border-black" name="min" placeholder="min" />
      <input className="boarder-2 border-black" name="max" placeholder="max" />
      <input className="boarder-2 border-black" name="average" placeholder="average" />
      <button>Create</button>
    </form>
  )
}