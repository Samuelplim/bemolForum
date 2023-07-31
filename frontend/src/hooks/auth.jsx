import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider( children ){
const [data, setData] = useState({})

async function signIn({ email, password}){
  const localstorageUser = "@forumBemol:user"
  const localstorageToken = "@forumBemol:token"
  try {
    const response = await api.post("/sessions", { email, password })
    const { user, token } = response.data

    localStorage.setItem(localstorageUser, JSON.stringify(
    user))
    localStorage.setItem(localstorageToken, token)

     
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

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

async function updateProfile({ user, avatarFile }){

  try{

    if(avatarFile){
      const fileUploadForm = new FormData()
      fileUploadForm.append("avatar", avatarFile)

      const response = await api.patch("/users/avatar", fileUploadForm)
      user.avatar = response.data.avatar
    }

    await api.put("/users", user)

       setData({ user, token: data.token})
       alert("Perfil actualizado com sucesso!")

    localStorage.setItem(localstorageUser, JSON.stringify(user))

 


  }catch(error){
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível actualizar os dados do perfil")
    }
  }
}

useEffect(() => {
  const token = localStorage.getItem(localstorageToken)
  const user = localStorage.getItem(localstorageUser)

  if(token && user){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

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