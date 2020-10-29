import React from "react";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);
  const listName = [
    { name: "maria" },
    { name: "paco" },
    { name: "pepe" },
    { name: "penelope" },
    { name: "juan" }
  ];
  const newList = [];
  
  // Load full list when the component gets mounted and filter gets updated
  // Init example
  /*React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then((response) => response.json())
      .then((json) => setUserCollection(json));
  }, [filter]);*/

  React.useEffect(() => {    
    listName.forEach(function (n) { 
      if (n.name.indexOf(`${filter}`) !== -1) {
        newList.push(n);
      }
    });
    setUserCollection(newList);
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
