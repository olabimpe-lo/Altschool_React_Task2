import React from "react";

export default function Card(props) {
  const { name, gender } = props
  const { title, first, last } = name
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px", height: "20px", border: "1px solid black", borderRadius: "30px", justifyContent: "space-between" }}>
      <section className="personal_data">
        name: {first}, {last}
      </section>
      <section className="personal_data">
        gender: {gender}
      </section>
      <section className="personal_data">
        email: {props.email}
      </section>

    </div>
  );
}
