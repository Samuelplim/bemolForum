import { createContext, useContext, useState, useEffect } from "react";

import { createSessions, setAuthToken } from "../services/sessions.service";

export const AuthContext = createContext({})

function AuthProvider({ children }){
const [data, setData] = useState({})
const localstorageCustomer = "@forumBemol:customer"
const localstorageToken = "@forumBemol:token"

async function signIn({ email, password}){
  try {
    const response = await createSessions({email, password});
    const {customer, token} = response.data

    localStorage.setItem(localstorageCustomer, JSON.stringify(customer))
    localStorage.setItem(localstorageToken, token)
    setAuthToken(token)

    setData({customer, token})

  } catch (error) {
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível entrar.")
    }
  }
}

  return(
    <AuthContext.Provider value={{ signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }