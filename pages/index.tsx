import { useEffect, useState } from "react"


export default function Home() {

  const [users, setUsers] = useState<Array>("");
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/apitest");
      const data = await response.json();
      setUsers(data.users);
      console.log(data.users)
    }
    fetchUsers()
  }, [])
  return (
    <>
      <div>
        <ul>
          {users.map((user) => {
            (<li key={user.id}>{user.name}</li>)
          })}</ul>


      </div>


    </>



  )
}
