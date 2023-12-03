import React from "react";
import { useGetCatalogueQuery } from "./state/tshirtSlice";
import Card from "./components/Card";
import "./styles/global.css"
import Header from "./components/Header";

function App() {
  const { data, error, isLoading } = useGetCatalogueQuery("");
  console.log(data, error, isLoading);
  return (
    <div>
      <Header />
      {error ? (
        <>Oh no, there was an error {error}</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="grid grid-cols-3 p-10 gap-x-5 gap-y-5">
          {data.map((i) => (<Card data={i}/>)
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
