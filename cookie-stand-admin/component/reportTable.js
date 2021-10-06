import { hours, reports } from '../pages/data'
import { useState } from 'react'
// import CreateForm from './form'
export default function ReportTable(props) {
    return (
        <table className="m-8 w-3/4">
            <thead>
                <tr className="odd:bg-green-500">
                    <th>Location</th>
                    {hours.map(item => {
                        return (<th>{item}</th>
                        )
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => {
                    return (
                        <tr className="odd:bg-green-400 even:bg-green-300 boarder border-gray-700">
                            <td className="border border-gray-700 text-center capitalize p-1">{item.location}</td>
                            {reports.map(item => {
                                return (<td className="text-center border border-gray-700">{item}</td>)
                            })}
                        </tr>)
                })}
            </tbody>
            <tfoot>
                <tr className="bg-green-500 border border-gray-700 text-center font-bold">Totals</tr>
            </tfoot>
        </table>
    )
}