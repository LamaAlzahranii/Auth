import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { Grid, Paper, Avatar, Button } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

const initialState = { email: '', password: '' };

const Signin = () => {
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };
  const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: "#1bbd7e" }
  const btnstyle = { margin: "8px 0" }


  return (
    <div className="login">
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h1>Sign In</h1>
        </Grid>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={input.email}
          autoComplete="off"
          onChange={handleChange}
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          onChange={handleChange}
          name="password"
        />
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <p className="form__error">{error}</p>
        
      </form>
      <FormControlLabel
        control={
        <Checkbox
            name="checkedB"
            color="primary"
        />
      }
      label="Remember me"
   />
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
      </Paper>
      </Grid>
      
          </div>
  );
};

export default Signin;
