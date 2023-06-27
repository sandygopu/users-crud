import "./styles/UserCard.css";
const UserCard = ({ user,deleteUserById,setUpdateInfo,setIsCloseForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }
  
    const handleEdit = () => {
      setUpdateInfo(user)
      setIsCloseForm(false)
    }
  
    return (
      
        <div className="div__cont">
        <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
          <li>
            <span>Email: </span>
            <span>{user.email}</span>
          </li>
          <li>
            <span>Birthday: </span>
            <span>{user.birthday}</span>
          </li>
        </ul>
        <div className="buttons">
        <button className= 'trash' onClick={handleDelete}><i className='bx bx-trash'></i> </button>
        <button  onClick={handleEdit}> <i className='bx bx-message-alt-edit'></i></button>
        </div>
        </div>
     
    );
  };
  
  export default UserCard;
  
  