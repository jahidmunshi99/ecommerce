import React, { useState } from 'react'
import ContentNav from '../ContentNav';
import TableView from './TableView'
import GridView from './GridView'
import { useFetch } from '../../../../../useHook/useFetch'


const DisplayLayout = () => {
    const url = "productsLists.json";
    const items = useFetch({url})

    
    const [layout, setLayout ] = useState(false);

  return (
    <div>
        <ContentNav layout={layout} setLayout={setLayout} items={items}/>
        {
            !layout ? <TableView items={items}/> : <GridView items={items}/>
        }
    </div>
  )
}

export default DisplayLayout