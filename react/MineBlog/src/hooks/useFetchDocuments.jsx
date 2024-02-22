import { useEffect, useState } from "react";
import {db} from '../../firebase/config.js'
import { collection, query, orderBy, onSnapshot, where} from "firebase/firestore";

export const useFetchDocuments = (docCollection,serch=null, uid=null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(()=>{

        async function loadData(){
            if(cancelled) return 

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                let q
                if(serch){
                    q = await query(collectionRef, where('tag','array-contains',serch),orderBy('createdAt', 'desc'))
                }else{
                    q = await query(collectionRef, orderBy('createdAt', 'desc'))
                }
                

                await onSnapshot(q, (querysnapshot)=>{
                    setDocuments(
                        querysnapshot.docs.map((doc)=> ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )

                })

                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)
                setLoading(false)
            }
        }
            loadData()
    },[docCollection, serch, uid, cancelled])

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return {documents, loading, error}
}