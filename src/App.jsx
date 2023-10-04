
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import FormUsers from './assets/components/FormUsers'
import UserCard from './assets/components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()


const baseUrl= 'https://userscrud-0nlt.onrender.com'

const [
  users, 
  getAllUser, 
  createNewUser, 
  deleteUserById,
  updateUserById 
 ] = useFetch(baseUrl)

 useEffect(() => {
   getAllUser('/users')

 },[])
const handleOpenForm = () => {
  setIsCloseForm(false)
}


return(
  <div>
    <div className='title'>
  <h1>Usuarios</h1>
    <button className='button__new-user' onClick={handleOpenForm}> 
      <h4>+ Crear nuevo usuario</h4>
      
    </button></div>
  <div className={`form-container ${isCloseForm && 'form_close'}`}>
  <FormUsers
    createNewUser={createNewUser}
    updateInfo={updateInfo}
    updateUserById={updateUserById}
    setUpdateInfo={setUpdateInfo}
    setIsCloseForm={setIsCloseForm}
  />
  </div>

  <div className='card__container'>
    {
      users?.map(user => (
        <UserCard
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      ))
    }
  </div>
</div>
)

}

export default App