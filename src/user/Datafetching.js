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
  //const handleClick = (num) => {
  //setPage(num);
  //};

  //if (isLoading) {
  // return
  //<h2>loading...</h2>;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = Card.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="">
      <h1 className="dataOfEmployee">Employee Data</h1>
      <Card
        key={index}
        name={item.name}
        gender={item.gender}
        email={item.email}
        isloading={loading}
      />
    </div>
  );
}
//   <>
//     <Users users={users} page={page} />
//         <Pagination totalPages={totalPages} handleClick={handleClick} setPage={setPage} page={page} />
//         <ErrorBoundary />
//       </>)};
// <div className="refreshLink">
// <NavLink to="/">Refresh</NavLink>
// </div>

//   return (
//     <div
//       className="listEmployee"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}>
//       {data.map((item, index) => {
//         return (
//           <Card
//             key={index}
//             name={item.name}
//             gender={item.gender}
//             email={item.email}
//           />
//         );
//       })}
//     </div>
//   );
// }

export default Datafetching;
