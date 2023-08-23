import "./Destination.css";
import Montain1 from "../assets/1.jpg";
import Montain2 from "../assets/2.jpg";
import Montain3 from "../assets/5.jpg";
import Montain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="The way Sarhan captures adventurous Saudi scenes is what
        distinguishes his photography from others. Accompanied by Faisal
        Al-Reath, a local tour guide, Sarhan hiked for three days to
        document inscriptions in Jabal Shaqra in the Al Reath Governorate —
        a mural of archaeological red ocher paintings that dates back
        thousands of years. The mountain regions south of Saudi are Sarhan’s
        favorite to photograph because of their charming nature and
        refreshing atmosphere. Here, he documented what he describes as one
        of his favorite projects: capturing the cultivation of Khawlani
        coffee and the lives of farmers whose traditions date back more than
        300 hundred years."
        img1={Montain1}
        img2={Montain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="The way Sarhan captures adventurous Saudi scenes is what
        distinguishes his photography from others. Accompanied by Faisal
        Al-Reath, a local tour guide, Sarhan hiked for three days to
        document inscriptions in Jabal Shaqra in the Al Reath Governorate —
        a mural of archaeological red ocher paintings that dates back
        thousands of years. The mountain regions south of Saudi are Sarhan’s
        favorite to photograph because of their charming nature and
        refreshing atmosphere. Here, he documented what he describes as one
        of his favorite projects: capturing the cultivation of Khawlani
        coffee and the lives of farmers whose traditions date back more than
        300 hundred years."
        img1={Montain3}
        img2={Montain4}
      />
    </div>
  );
}

export default Destination;
