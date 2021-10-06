export default function Footer(props) {
  return (
      <footer className="w-screen mb-30 p-4 bg-green-500 text-black-100 text-left">
          <h1 className='text-4xl'>{props.count} Locations World Wide</h1>
      </footer>
  )
}