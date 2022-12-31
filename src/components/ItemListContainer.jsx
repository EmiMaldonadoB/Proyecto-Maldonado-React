import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../utilidades/firebaseConfig";

function ItemListContainer(props) {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        const fetchFromFirestore = async() => {
            let q;
            if (idCategory){
                q = query(collection(db, 'Productos'), where('categoria', '==', parseInt(idCategory)));
            } else{
                q = query(collection(db, "Productos"));
            }
            
            const  querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);


    return (
        <ItemList datos={datos} />
    );
}

export default ItemListContainer;