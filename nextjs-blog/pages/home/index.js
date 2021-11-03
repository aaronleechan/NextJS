import { useEffect} from "react";
import {useRouter} from 'next/router';

const Home = () =>{
    const router = useRouter()
    return(
        <h1>This is Home Page</h1>
    )
}
export default Home