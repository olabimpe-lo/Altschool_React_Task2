import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import Pagination from "../components/Pagination";
import ErrorPage from "../components/ErrorPage.js";
// import ErrorBoundary from "../components/ErrorBoundary.js";


//my state
function Datafetching() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://randomuser.me/api/?page=${currentPage}&results=10`;
 const [error, setError] = useState(false);

  //to make your request
  useEffect(() => {
    console.log("hi")
    const fetchUsers = async () => {
      const res = await axios.get(url)
      // .catch(() => setError(false));
      setData(res.data.results);
      setIsLoading(false);
    console.log(res);
    };
    
    fetchUsers();
  }, [currentPage]);

 
  // if (error) {
  //   return (
  //     <ErrorPage/>
  //   );
  // }

     return (
       <div className="">
         <h1 className="data-client"> Client Data</h1>
         {data.map((item, index) => {
           return (
             
               <Card
                 key={index}
                 name={item.name}
                 gender={item.gender}
                 email={item.email}
               />
           );
         })}

         <button onClick={() => setCurrentPage((prev) => prev - 1)}>
           Previous
         </button>
         <button onClick={() => setCurrentPage((prev) => prev + 1)}>
           Next
         </button>
       </div>
     );
}
export default Datafetching;
