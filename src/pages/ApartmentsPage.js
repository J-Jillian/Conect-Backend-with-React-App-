import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

function ApartmentsList() {
  let navigate = useNavigate();

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get(`${API_BASE_URL}`).then((response) => {
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
      <div
        style={{ display: "grid", gridTemplate: "1fr / 1fr 1fr", gap: "20px" }}
      >
        {apartments.map((apartment) => (
          <div
            key={apartment._id}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/apartments/${apartment._id}`)}
          >
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentsList;
