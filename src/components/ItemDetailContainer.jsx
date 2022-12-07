import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {customFetch} from "../utilidades/customFetch";
import ItemDetail from "./ItemDetail";
import  {data}  from "../utilidades/data";
// const { data } = require('../utilidades/data');

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt( idItem )))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}