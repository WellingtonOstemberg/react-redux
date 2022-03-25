import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "./redux";
import { UserState } from "./redux/reducers/user";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

function App() {

  const dispatch = useAppDispatch()
  const userState: UserState = useAppSelector(state => state.user)
  const [name, setName] = useState('')


  const handleUser = () => {
    dispatch(getUserRequest(name))
  }

  useEffect(() => {
    console.log(userState, 'app page');    
  }, [userState])
  
  
  

  return (
    <>
      <h1>User {userState.user.message} - {userState.user.name} - {userState.user.avatar_url}</h1>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleUser} disabled={!name.length}>User Request</button>
    </>
  );
}

export default App;
