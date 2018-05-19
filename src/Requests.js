function login (username, password, cb){
  return fetch('/login',{
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
}

export {login} 