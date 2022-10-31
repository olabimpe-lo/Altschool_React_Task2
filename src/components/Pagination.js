import React from "react";

function Pagination({
  totalPages,
  handleClick,

  page,
  setPage,


}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // Previous button click...
  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  // Next button click...
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div style={{ width: 'fit-content', margin: 'auto' }}>
      <button className="buttons"
        onClick={(event) => {
          previousPage(event);
        }}
        disabled={page === 1}
      >
        Prev
      </button>

      {pages.map((num) => (
        <button className="btn-page" style={{ cursor: 'pointer' }} key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}

      <button className="buttons" onClick={(event) => nextPage(event)} disabled={page === 10}>
        Next
      </button>
    </div>
  );
}

export default Pagination;