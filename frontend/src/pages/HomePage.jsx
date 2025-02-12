import { useAuthStore } from "../store/useAuthStore";

const HomePage = ()=>{
    const {logout} = useAuthStore()
    return (
        <>
        Homepage
        <button onClick={logout}>Logout</button>
        </>
    )
}
export default HomePage;