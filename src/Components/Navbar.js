import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar shadow mb-2 sticky-top bg-light justify-content-start justify-items-center">
            <div className="navbar-brand ms-4 pb-0 h1" style={{cursor: "default"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stickies me-2" viewBox="0 0 16 16">
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"/>
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"/>
                </svg>
                NoteClone
            </div>
            <a className="nav-link ms-4" href="/noteclone/">Homepage</a>
            <Link to={'/new'} className="nav-link ms-3">
                New Note
            </Link>
        </nav>
    )
}