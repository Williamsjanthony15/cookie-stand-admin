// import { useState } from 'react'
export default function CreateForm(props) {
  return (
      <div className='m-8 w-5/6 h-auto rounded-md bg-green-300'>
          <h2 className='text-center text-3xl m-4'>Create Cookie Stand</h2>
          <form onSubmit={props.create} className=''>
              <label className="mr-2">Location </label>
              <input name="location" className="w-11/12"></input>
              <div className="grid grid-cols-4 place-items-center mt-4 mb-4">
                  <section>
                      <label className='block'>Minimum Customers per Hour</label>
                      <input name="min" className='block w-56'></input>
                  </section>
                  <section>
                      <label className="block">Maximum Customers per Hour</label>
                      <input name="max" className='block w-56'></input>
                  </section>
                  <section>
                      <label className="block">Average Cookies per Sale</label>
                      <input name="avg" className='block w-56'></input>
                  </section>
                  <button className="font-medium text-xl bg-green-500 w-52 h-16 rounded-md hover:bg-blue-500">Create</button>
              </div>
          </form >
      </div>
  )
}
