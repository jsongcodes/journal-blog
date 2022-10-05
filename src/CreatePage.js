import { useState } from "react";
import Create from "./Create";

const CreatePage = () => {
    const [entries, setEntries] = useState([]);

    function onAddEntry(newEntry){
        const updatedEntries = [...entries, newEntry]
        setEntries(updatedEntries)
      }

    return(
        <Create onAddEntry={onAddEntry}/>
    )
}

export default CreatePage;