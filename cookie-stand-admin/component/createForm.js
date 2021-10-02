import { Component, useState } from "react";

export default function CreateForm(props) {
  const [storeData, setStoreData] = useState("Waiting for data...");

  function storeCreate(event) {
    event.preventDefault();
    setStoreData(
      `{'location':"${event.target.location.value}', 'minCustomers': ${event.target.minimum.value}, 'maxCustomers': ${event.target.maximum.value}, 'avgCookie': ${event.target.average.value}} `
    );
  }
  return (
    <div className="m-8 w-5/6 h-auto rounded-md bg-green-300">
      <h2 className="text-center text-x1 m-4">Create Cookie Stand</h2>
      <form onSubmit={storeCreate} className="">
        <label className="mr-2.5">Location</label>
        <input name="location" className="w-11/12"></input>
        <div className="grid grid-cols-4 place-items-center mt-4 mb-4">
          <section>
            <label className="block">Minimum Customers per Hour</label>
            <input name="minimum" className="block w-56"></input>
          </section>
          <section>
            <label className="block">Maximum Customers per Hour</label>
            <input name="maximum" className="block w-56"></input>
          </section>
          <section>
            <label className="block">Average Cookies per Sale</label>
            <input name="average" className="block w-56"></input>
          </section>
          <button className="bg-green-500 w-56 h-14">Create</button>
        </div>
      </form>
    </div>
  );
}
