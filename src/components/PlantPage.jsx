// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   return (
//     <main>
//       <NewPlantForm />
//       <Search />
//       <PlantList />
//     </main>
//   );
// }

// export default PlantPage;

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // See all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants") // Ensure this matches your backend URL
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Callback to add a new plant to the state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants based on search query
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {/* Pass the FILTERED list to the PlantList */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
