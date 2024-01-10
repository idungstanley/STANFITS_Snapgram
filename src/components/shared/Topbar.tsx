import { useUserContext } from '@/context/AuthContext'
import { useSignOutAccount } from '@/lib/react-queries/queriesAndMutations'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const navigate = useNavigate()
  const { user } = useUserContext()

  useEffect(() => {
    if (isSuccess) navigate(0)
  }, [isSuccess, navigate])

  return (
    <section className="topbar">
      <div className="px-5 py-4 flex-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-between gap-2">
            <img
              src="/assets/images/stanfits.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h3>STANFITS SNAP</h3>
          </div>
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="gap-3 flex-center">
            <img
              src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar
