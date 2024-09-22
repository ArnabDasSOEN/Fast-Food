import axios from "axios";

export default function LogoutButton(){
    const delSession = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3000/logout", {withCredentials:true})
            .then( () => {
                window.location.reload(); //reloads the page
            })
            .catch( () => {
                console.log("Error logging out")
            })
    }
    return(
        <form onSubmit={delSession} className="logging">
            <button>Logout</button>
        </form>
    )
}