import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";

function Datafetching() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const url = "https://randomuser.me/api/?results=50";

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(url);
      setData(res.data.results);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="">Employee Data</h1>
        <h2>loading...</h2>

        {/* <Card users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            setPage={setPage}
            page={page}
          />
          <ErrorBoundary />
        </> */}
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="dataOfEmployee">Employee Data</h1>
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
    </div>
  );
}
export default Datafetching;
