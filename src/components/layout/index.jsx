import { LOGIN } from "lib/routes"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "src/hooks/auth"
import Navbar from "components/navbar"

export default function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, isLoading } = useAuth() // custom hook

  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN)
    }
  }, [pathname, user])

  if (isLoading) return "Loading..."

  return (
    <>
      <Navbar />
      {/* This is the child:  */}
      <Outlet />
    </>
  )
}
