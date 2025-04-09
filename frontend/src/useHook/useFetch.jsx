import { useEffect, useState } from 'react';
import axios from 'axios';


export const useFetch = ({url}) => {
    /**
     * Fetch Data
    */
        const [ items, setItems] = useState([]);

        useEffect(()=>{
            const fetchData = async() =>{
                try {
                    const response = await axios.get(url)
                    setItems(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData();
    
        },[])

  return ( items )
}
