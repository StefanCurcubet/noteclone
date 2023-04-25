import { useState } from "react";

export default function Note({note, getNotes}){

    let [updatedBody, setUpdatedBody] = useState({})
    let [selectedNote, updateSelectedNote] = useState(0)

    function formatTime(timestamp){
        return new Date(timestamp).toLocaleString()
    }

    async function updateNote() {
        await fetch(`https://stefanc.pythonanywhere.com/notes/${note.id}/update`,{
            method : "PUT",
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({...note, body : updatedBody})
        })
        getNotes()
        updateSelectedNote(0)
    }

    async function deleteNote() {
        await fetch(`https://stefanc.pythonanywhere.com/notes/${note.id}/delete`,{
            method : "DELETE",
            headers : {
                'Content-type' : 'application/json'
            }
        })
        getNotes()
        updateSelectedNote(0)
    }

    return (
        <div className="card justify-self-center mb-3">
            <div className="card-body" onClick={(e) => selectedNote === 0 ? updateSelectedNote(note.id) : null} style={{cursor: "pointer"}}>
                <h4 className="card-title d-flex justify-content-between">
                    {note.title}
                    {selectedNote === note.id && <button type="button" className="btn-close" aria-label="Close" onClick={(e) => updateSelectedNote(0)}></button>}
                    </h4>
                {selectedNote !== note.id ? 
                    <p className="card-text">{note.body}</p> :
                    <textarea className="form-control" defaultValue={note.body} onChange={(e) => setUpdatedBody(e.target.value)}></textarea>
                }
            </div>
                <div className="card-footer">
                    {formatTime(note.changed)}
                    <div className="d-flex justify-content-between">
                        {selectedNote !== 0 && <button type="button" className="btn btn-warning" onClick={updateNote}>Update</button>}
                        <button type="button" className="btn btn-danger" onClick={(e) => deleteNote()}>Delete</button>
                    </div>
                </div>
        </div>
    )
}