import { useState, useEffect } from "react";
import ItemList from './ItemList';
import {data} from '../utilidades/data';
import { customFetch } from '../utilidades/customFetch';
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        if (idCategory) {
            customFetch(2000, data.filter(item => item.categoria == idCategory ))
                .then(response => setDatos(response))
                .catch(err => console.log(err));
        } else {
            customFetch(2000, data)
                .then(response => setDatos(response))
                .catch(err => console.log(err));
            }
    }, [idCategory]);


    return (
        <ItemList datos={datos} />
    );
}

export default ItemListContainer;