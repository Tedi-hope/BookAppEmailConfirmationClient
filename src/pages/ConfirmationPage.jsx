import React,{useEffect} from 'react'
import { useNavigate, useParams ,Link} from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';


const ConfirmationPage = () => {
    const{ token }=useParams();
    const navigate=useNavigate();
    const{ enqueueSnackbar}=useSnackbar();

   useEffect(()=>{
        axios
        .get(`https://bookappemailconfirmationserver.vercel.app//user/confirm/${token}`)
        .then(()=>{
            //console.log(response.data);
            //alert(response);
            enqueueSnackbar('Confirmed Successfully',{variant:'success'});
            navigate('/');
        })
        .catch((error)=>{
          //console.log(error.response?.data || error.message);
          if(error.response?.status===404){
            enqueueSnackbar('User not found or already confirmed.!!', { variant: 'error' });
          }
          //Handle specific error messages
          if(error.response?.status===400){
            enqueueSnackbar('Token expired.Please request a new confirmation link...', { variant: 'error' });
          }
          else{
            enqueueSnackbar('Invalid token.Please try again.!!!',{variant:'error'});
          }
          
        });
       
    },[token, enqueueSnackbar, navigate]);

  return (
    <div>
       <h2>Processing Your Confirmation...</h2>
        <p>If this takes too long, please try refreshing the page.</p>
            <p>
                <Link to="/">Go to Login</Link>
            </p>
    </div>
  );
};

export default ConfirmationPage