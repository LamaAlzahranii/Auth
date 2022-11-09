import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase/firebase"
import { Grid, Paper, Avatar, Button } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

const initialState = { userName: "", email: "", password: "", confirmPassword: "" }

const Signup = () => {
  const history = useHistory()
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    })
    setError("")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (input.password !== input.confirmPassword) return setError("Password don't match")

    try {
      await auth.createUserWithEmailAndPassword(input.email, input.password)
      setInput(initialState)
      history.push("/")
    } catch (err) {
      setError(err.message)
    }
  }
  const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: "#1bbd7e" }
  const btnstyle = { margin: "8px 0" }

  return (
    <div className="signup">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Sign Up</h1>
          </Grid>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Full name:</label>
            <input id="userName" type="text" value={input.userName} onChange={handleChange} name="userName" required />
            <label htmlFor="email">Email:</label>
            <input type="text" value={input.email} onChange={handleChange} name="email" required />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={input.password}
              autoComplete="off"
              onChange={handleChange}
              name="password"
              required
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              value={input.confirmPassword}
              autoComplete="off"
              onChange={handleChange}
              name="confirmPassword"
              required
            />
            <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
              Sign Up
            </Button>
            <p className="form__error">{error}</p>
          </form>
          <p>
            Already a user? <Link to="/login">Sign In</Link>
          </p>
        </Paper>
      </Grid>
    </div>
  )
}

export default Signup
