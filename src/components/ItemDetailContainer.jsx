import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {customFetch} from "../utilidades/customFetch";
import ItemDetail from "./ItemDetail";
import  {data}  from "../utilidades/data";


export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data)
            .then(result => setDetail(result.find(item => item.id === parseInt(idItem))))
            .catch(err => console.log(err))
    }, [idItem]);
    
    console.log(detail)
    return (
        <>
        <ItemDetail item={detail} />
        </>
    );
}