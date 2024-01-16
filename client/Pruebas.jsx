import React, { useState } from "react";

const countries = [
  "Argentina",
  "Brazil",
  "Canada",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Japan",
  "Korea",
  "Mexico",
  "Netherlands",
  "Oman",
  "Portugal",
  "Qatar",
  "Russia",
  "Spain",
  "Turkey",
  "United Kingdom",
  "United States",
  // ... (añade más países si es necesario)
];

const CountriesList = ({ currentPage, countriesPerPage }) => {
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <ul>
      {currentCountries.map((country, index) => (
        <li key={index}>{country}</li>
      ))}
    </ul>
  );
};

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const Pruebas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 5;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div>
        <h1>Listado de Países</h1>
        <CountriesList
          currentPage={currentPage}
          countriesPerPage={countriesPerPage}
        />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Pruebas;
