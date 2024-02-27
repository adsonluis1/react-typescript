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
            
            let systemErrorMessage
            console.log(error.message)
            if(error.message.split(' ').includes('Password')){
                systemErrorMessage = 'Senha precisa de no minimo 6 caracteres'
            }else if(error.message.split(' ').includes('(auth/email-already-in-use).')){
                systemErrorMessage = 'Email já registrado'
            }
            else{
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
            console.log(error.message)
            let systemErrorMessage
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