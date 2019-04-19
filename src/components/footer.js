import React from "react"

const weddingDate = new Date(2019, 7, 31);
const dateNow = new Date();
const distance = weddingDate - dateNow;
const daysToWedding = Math.floor(distance / (1000 * 60 * 60 * 24));

const Footer = () => (
  <footer>
    The wonderful day is { daysToWedding } days away!
  </footer>
)

export default Footer
