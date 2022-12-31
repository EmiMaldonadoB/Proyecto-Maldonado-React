import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../utilidades/firebaseConfig"



export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
            const fetchOneFromFirestore = async () => {
                    const docRef = doc(db, "Productos", idItem);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        return {
                            id: idItem,
                            ...docSnap.data()
                        }
                    } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                        }   
                    }  
                    fetchOneFromFirestore()   
                        .then(result => setDetail(result))
                        .catch(err => console.log(err))
    }, []);
    
    
    return (
        <>
        <ItemDetail item={detail} />
        </>
    );
}