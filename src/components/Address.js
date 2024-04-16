import React,{ useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";

const Address = () => {
  const [address, setAddress] = useState([]);
  const [show,setShow]=useState(false)
  const [id,setId]=useState("")

  const [val,setval]=useState([]);

  const userCollection = collection(db, "users");

  useEffect(() => {
    const getAddress = async () => {
      const data = await getDocs(userCollection);



      setval(
        data.docs.map((doc) => ({...doc.data(),id:doc.id}))
      );
    };

    getAddress();
  },[]);

  const createAddress = async () => {
    await addDoc(userCollection,{address:address});
    setAddress(" ");
  }

  const updateAddress = async () => {
    const updateData= doc(db, "users",id)
    await updateDoc(updateData,{address:address});
    setShow(false);
    setAddress("");
  }

  return (
    <div>
      <input value={address} onChange={(e)=> setAddress(e.target.value)}/>
      {!show?<button onClick={createAddress}>Create</button>: <button onClick={updateAddress}>Update</button>}
      {
        val.map(values =>
          <div>
            <h1>{values.address}</h1>
          </div>)
      }
    </div>
  );
};

export default Address;
