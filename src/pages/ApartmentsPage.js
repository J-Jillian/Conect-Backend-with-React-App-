import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function ApartmentsList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>List of apartments</h3>

      {/*      ADD     */}
      {apartments.length === 0 && (
        <h4>No apartments to show 📭. GET the data from the API!</h4>
      )}

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentsList;
