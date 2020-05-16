import { serialize } from 'cookie'

const login = (req, res) => {
  const cookies = [
    serialize('token', `abc123${Math.floor(Math.random() * 1000)}`, {httpOnly: true, path: '/'}),
    serialize('isLoggedIn', 'true', {httpOnly: false, path: '/'})
  ].join(';')

  res.setHeader('Set-Cookie', cookies)
  res.send('test')
}

export default login
