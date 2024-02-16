import { db } from '../../firebase/config.js'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useAuthenticator = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIsCancelled() {
        if(cancelled){
            return
        }
    }

    const createUser = async (data)=>{
        checkIsCancelled()
        setError(null)
        setLoading(true)

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.senha
            )
            
            await updateProfile(user,{
                displayName: data.nome
            })

        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)
            
            let systemErrorMessage

            if(error.message.includes('password')){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
            }else if(error.massage.includes('email-already')){
                systemErrorMessage = 'e-mail já cadastrado'
            }else{
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde'
            }

            setError(systemErrorMessage)
        }
        
        setLoading(false)
    }

    const logout = ()=>{
        checkIsCancelled()
        signOut(auth)
    }

    const login = async(data) =>{
        checkIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth,data.email, data.senha)
        } catch (error) {
            
            let systemErrorMessage
            console.log(error)
            if(error.message.includes('auth/invalid-credential')){
                systemErrorMessage = 'Senha ou Email incorreto'
            }else{
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde'
            }


            setError(systemErrorMessage)
        }

        setLoading(false)
    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}