import React, { useEffect, useState }from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings]= useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(setListings)
  }, [])

function handleRemoveListing(id){
  const updatedListings = listings.filter(listing => listing.id !== id)
  setListings(updatedListings)
}

const displayedListings = listings.filter(listing => 
  listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer
      listings={displayedListings} 
      onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
