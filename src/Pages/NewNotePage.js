import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

export default function NewNotePage(){
    
    let [newNote, setNewnote] = useState({
        title : "",
        body : "",
    })

    let navigate = useNavigate()

    async function submitNote(){
        await fetch('https://stefanc.pythonanywhere.com/notes/new',{
            method : "POST",
            headers: {
                'Content-type' : 'application/json',
            },
            body : JSON.stringify(newNote)
        })
        navigate('/')
    }

    return (
        <>
        <Navbar />
        <div className="container w-50 mt-3">
            <div className="text-center">
                <h2>Create a new note</h2>
            </div>
            <div className="row justify-content-center my-5">
                <label htmlFor="title-input" className="form-label"> Title</label>
                <textarea className="form-control" id="title-input" onChange={(e) => setNewnote({...newNote, title : e.target.value})} placeholder={"Title here..."}></textarea>
                <label htmlFor="title-body" className="form-label"> Body</label>
                <textarea className="form-control mb-2" id="title-body" onChange={(e) => setNewnote({...newNote, body : e.target.value})} placeholder={"Body here..."}></textarea>
                <button type="button" className="btn btn-primary mb-1" onClick={submitNote}>Submit</button>
                <button type="button" className="btn btn-secondary" onClick={(e) => navigate('/')}>Cancel</button>
            </div>
        </div>
        </>
    )
}