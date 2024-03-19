import { Outlet, useLocation } from "react-router-dom"

export default function App() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      
      <main>
        <Outlet location={location} key={location.pathname} />
      </main>

    </>
  )
}
