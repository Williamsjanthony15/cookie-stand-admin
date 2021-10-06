import Head from "next/head";
import Header from '../component/header.js'
import Main from '../component/main.js'
// import CreateForm from '../component/createForm.js'
// import ReportTable from "../component/reportTable.js";
// import Footer from '../component/footer.js'

export default function Home() {
  return (
    <div className='bg-green-300'>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/faviron.ico' />
      </Head>
      <Header />
      <Main />
    </div>
  )
}














