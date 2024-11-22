import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
