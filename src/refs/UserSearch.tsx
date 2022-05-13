import { stringify } from 'querystring'
import { useState, useRef, useEffect } from 'react'

const users = [
  {name: 'Sarah', age: 30},
  {name: 'Beth', age: 30},
  {name: 'Rachel', age: 30}
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [ name, setName ] = useState('')
  const [ user, setUser ] = useState<{name: string, age: number} | undefined>()

  useEffect(() => {
    if(!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })
    setName('')
    setUser(foundUser)
  }

  return <div>
            <h2>User Search</h2>
            <input ref={inputRef} value={name} onChange={e => {setName(e.target.value)}}></input>
            <button onClick={onClick}>Find User</button>
            <div>
              {user?.name}
              {user?.age}
            </div>
          </div>
}

export default UserSearch