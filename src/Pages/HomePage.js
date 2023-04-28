import { useEffect, useState } from "react"
import Note from "../Components/Note"

export default function HomePage(){

    let [notes, updateNotes] = useState([])
    
    async function getNotes(){
        let response = await fetch("https://stefanc.pythonanywhere.com/notes/")
        let data = await response.json()
        updateNotes(data)
    }

    useEffect((() => {
        getNotes()
    }),[])

    let allNotes = notes.map(note => <Note key={note.id} note={note} getNotes={getNotes}/>)
    
    return(
        <div className="container">
            {allNotes}
        </div>
    )
}