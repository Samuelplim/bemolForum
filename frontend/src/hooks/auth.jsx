import { createContext, useContext, useState, useEffect } from "react";

import { createSessions, setAuthToken } from "../services/sessions.service";

export const AuthContext = createContext({})

function AuthProvider( children ){
const [data, setData] = useState({})

async function signIn({ email, password}){
  const localstorageUser = "@forumBemol:user"
  const localstorageToken = "@forumBemol:token"
  try {
    const response = await createSessions({ email, password })
    const { user, token } = response.data

    localStorage.setItem(localstorageUser, JSON.stringify(user))
    localStorage.setItem(localstorageToken, token)

    setAuthToken(token)

    setData({user, token})
    
  } catch (error) {
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível entrar.")
    }
  }
}

function signOut(){
  localStorage.removeItem(localstorageUser)
  localStorage.removeItem(localstorageToken)

  setData({})
}

useEffect(() => {
  const token = localStorage.getItem(localstorageToken)
  const user = localStorage.getItem(localstorageUser)

  if(token && user){
    setAuthToken(token)

    setData({
      token,
      user:JSON.parse(user)
    })

  }
}, [])

  return(
    <AuthContext.Provider value={{
      signIn, 
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }