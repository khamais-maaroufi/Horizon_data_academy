import {useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import UserNav from "../nav/UserNav"

const InstructorRoute = ({children}) => {
    //state
    const [ok, setOk] = useState(false);
    //router
    const router = useRouter();

    const fetchInstructor = async () => {
        try{
            const {data} = await axios.get("/api/current-instructor");
           if (data.ok) setOk(true);
        }catch(err){
            console.log(err);
            setOk(false);
            router.push("/login");
        }
    };
    useEffect(() =>{
        fetchInstructor();
    }, []);
    return (
    <>
    {!ok ? <SyncOutlined spin 
    className="d-flex justify-content-center display-1 text-primary p-5"/> : <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <UserNav/>
            </div>
            <div className="col-md-10">
                {children}
            </div>
        </div>
    </div>
    }
    </>
    );
};
export default InstructorRoute;