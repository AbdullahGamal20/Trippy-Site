import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>you can discover your unique destination using google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="
                Immerse yourself in the vibrant culture of Bali, with its stunning temples and traditional dance performances.
                Explore the historical city of Yogyakarta and visit the majestic Borobudur Temple.
                Experience a thrilling adventure rafting down the Ayung River in Ubud.
                Embark on a diving expedition in the crystal-clear waters of the Gili Islands.
                the mighty Komodo dragons.
                "
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="
          Embark on a journey through the vibrant streets of Kuala Lumpur.
          Discover the breathtaking beauty of the Cameron Highlands.
          Immerse yourself in the cultural richness of Georgetown, Penang.
          Experience the thrill of exploring the ancient rainforests of Taman Negara.
          Indulge in delicious street food at Jalan Alor, Kuala Lumpur.
          Take a relaxing boat ride along the tranquil Lake .
          
          "
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="
          Explore the charming streets of Paris.
          Visit the iconic Eiffel Tower.
          Indulge in delicious French cuisine.
          Take a romantic boat ride along the Seine River.
          Discover the historic Palace of Versailles.
          Stroll through the art-filled Louvre Museum.
          Relax on the beautiful beaches of Nice.
          Explore the stunning landscapes of Provence.
          "
        />
      </div>
    </div>
  );
}

export default Trip;
