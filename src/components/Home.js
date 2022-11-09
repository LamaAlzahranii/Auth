import React, { useContext } from "react"
import { AuthContext } from "../context/auth"
import { auth } from "../firebase/firebase"
import { Button } from "@material-ui/core"

const Home = () => {
  const { user } = useContext(AuthContext)
  const btnstyle = { margin: "8px 0" }

  return (
    <div className="home">
      <h3>Welcome {user.userName}</h3>
      <h4>{user.email}</h4>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        onClick={() => auth.signOut()}
        fullWidth
      >
        Sign Out
      </Button>
    </div>
  )
}

export default Home
