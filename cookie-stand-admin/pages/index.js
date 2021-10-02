import Head from "next/head";
import Header from '../component/header.js'
import CreateForm from '../component/createForm.js'
import ReportTable from "../component/reportTable.js";
import Footer from '../component/footer.js'

export default function Home() {


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CreateForm />
      <ReportTable />
      <Footer />
    </>
  );
}

