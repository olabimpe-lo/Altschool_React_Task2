import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js"
function Datafetching() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
const url = "https://randomuser.me/api/?results=50"

  useEffect( ()=>{
    const fetchUsers = async()=>{ 
    const res = await axios.get(url)
    setData(res.data.results)
      setIsLoading(false)
      setTotalPages
      (Math.ceil (res.data.results.length / USER_PER_PAGE));
    };
    fetchUsers()
  },[]);
  const handleClick = (num) => {
    setPage(num);
  }

  if(isLoading) {
    return (
      <div className="Contract Employee">
        {IsLoading ? (<p>loading...</p> ) : (
    
    <>
      <Users users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} setPage={setPage} page={page} />
          <ErrorBoundary />
        </>)};
  <div className="refreshLink">
  <NavLink to="/">Refresh</NavLink>
  </div>
      </div>

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}> 
      {data.map((item, index)=>{
      return <Card key={index} name={item.name} gender={item.gender} email={item.email} />
      })}

    </div>
  );
}

export default Datafetching;
