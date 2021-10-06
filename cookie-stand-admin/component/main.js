import { useState } from 'react'
import CreateForm from './createForm'
import ReportTable from './reportTable'
import Footer from './footer'

export default function Main(props) {
    const [cookieData, setCookieData] = useState([]);
    function createCookieStand(e) {
        e.preventDefault();
        const locationData = {
            location: e.target.location.value,
            min: e.target.min.value,
            max: e.target.max.value,
            avg: e.target.avg.value,
            id: cookieData.length
        }
        setCookieData([...cookieData, locationData]);
    }
    return (
        <main className='flex flex-col items-center justify-center flex-1 px-20 bg-green-50 text-center'>
            <CreateForm create={createCookieStand} />
            {cookieData.length > 0 ? <ReportTable data={cookieData} /> : <h2 className='pt-5 text-xl'>No Cookie Stands Available</h2>}
            <Footer count={cookieData.length} />
        </main>
    )
}
