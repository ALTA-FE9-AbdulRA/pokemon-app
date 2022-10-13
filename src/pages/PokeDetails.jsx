/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "components/Layout";

const PokeDetails = ({
  id,
  name,
  images,
}) => {

  return (
    <Container>
      <div className="card-detail-wrapper mx-14 ">
      <h1 className="text-center">Isi Detail Pokemon</h1>
      <img src="" alt="image"/>
      <p>Masih Prototype</p>
      </div>
    </Container>
  )
}

export default PokeDetails;