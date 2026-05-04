import React, { useState } from 'react'

const UseStateP = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setMessage('Please fill all fields')
    } else if (password.length < 6) {
      setMessage('Password must be at least 6 characters')
    } else {
      setMessage('Login successful ')
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  )
}

export default UseStateP