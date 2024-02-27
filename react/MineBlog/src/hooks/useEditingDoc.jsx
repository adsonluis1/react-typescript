import { useReducer } from "react";
import { db } from "../../firebase/config";
import {updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const editingReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "EDITED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useEditingDoc = (docCollection) => {
  const [response, dispatch] = useReducer(editingReducer, initialState);

  const editDocument = async (id, data) => {
    
    dispatch({type: "LOADING"});
    try {
        
        const docRef = await doc(db, docCollection, id)

        const updatedDocument = await updateDoc(docRef, data)

        dispatch({
            type: "EDITED_DOC",
            payload: updatedDocument,
          })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  return { editDocument, response };
};