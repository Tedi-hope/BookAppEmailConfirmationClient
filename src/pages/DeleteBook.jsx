import React from 'react'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const DeleteBook = () => {
  const navigate=useNavigate();
  const { id }=useParams();
  
  const handleDeleteBook=()=>{
    axios
    .delete(`https://bookappemailconfirmationserver.vercel.app/books/${id}`)
    .then(()=>{
        navigate('/home')
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  return (
    <div className="p-4">
      <BackButton />
      <div className="d-flex flex-column flex-justify-center border border-danger rounded-xl p-5">
        <h5 className="display-5 my-5 text-center">
            Are you sure you want to delete this book?
        </h5>
        <button className="p-3 btn btn-lg btn-danger text-white m-8 mx-auto py-2"
        onClick={handleDeleteBook}>
           Yes,Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook