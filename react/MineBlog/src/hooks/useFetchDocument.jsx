import { useEffect, useState } from "react";
import {db} from '../../firebase/config.js'
import { doc, getDoc} from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(()=>{

        async function loadDocument(){
            if(cancelled) return 

            setLoading(true)

            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap =  await getDoc(docRef)

                setDocument(docSnap.data())

            } catch (error) {
                console.log(error)
                setError(error.massage)
            }

           setLoading(false)
        }
            loadDocument()
    },[docCollection,id])

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return {document, loading, error}
}