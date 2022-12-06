import { useState, useEffect } from "react";
import ItemList from './ItemList';
import {data} from '../utilidades/data';
import { customFetch } from '../utilidades/customFetch';

function ItemListContainer(props) {
    const [datos, setDatos] = useState([]);

    //componentDidMount
    useEffect(() => {
        customFetch(2000, data)
        .then(response => setDatos(response))
        .catch(err => console.log(err));
    }, []);


    return (
        <ItemList datos={datos} />
    );
}

export default ItemListContainer;