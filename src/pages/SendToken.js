import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useUserContext} from '../contexts/userContext';
import {toast} from 'react-toastify';

const SendToken = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const {saveUser, removeUser, setLoading} = useUserContext();

    const handleSendToken = async (token) => {
        setLoading(true);
        try {
            const {data} = await axios.post('/api/v1/response-cookie', {token});
            saveUser(data.tokenUser)
            navigate("/");
            toast.success("Sign in successfully!")
        } catch (error) {
            removeUser();
            navigate("/signin");
            toast.error("Error something went wrong.");
        }
        setLoading(false);
    }

    useEffect(()=>{
        const token = query.get("token");
        handleSendToken(token);
        // eslint-disable-next-line
    }, [])

  return (
      <h1>Loading...</h1>
  );
};

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default SendToken;
