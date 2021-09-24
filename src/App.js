import { useState } from "react";
import "./styles.css";

// Database
const entertainment = {
  webseries: [
    {
      name: "Friends",
      rating: "5/5"
    },
    {
      name: "Money Heist",
      rating: "5/5"
    },
    {
      name: "Big Bang",
      rating: "4/5"
    }
  ],
  movies: [
    {
      name: "3 Idiots",
      rating: "5/5"
    },
    {
      name: "Rang de Basanti",
      rating: "4/5"
    },
    {
      name: "Border",
      rating: "4/5"
    },
    {
      name: "Sairat",
      rating: "3/5"
    }
  ],
  songs: [
    {
      name: "Channa meraya",
      rating: "5/5"
    },
    {
      name: "Somebody to you",
      rating: "4/5"
    },
    {
      name: "Believer",
      rating: "4/5"
    }
  ]
};
export default function App() {
  const [selectedType, setSelectedType] = useState("webseries");

  const clickHandler = (item) => {
    setSelectedType(item);
  };

  const type = Object.keys(entertainment);
  return (
    <div className="App">
      <h1>👀 I like to watch 👀</h1>
      <h3>
        Checkout my favorite Webseries, movie, song on the basis of my rating.
      </h3>
      <div>
        {type.map((item) => {
          return (
            <span onClick={() => clickHandler(item)} className="link">
              {item}
            </span>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {entertainment[selectedType].map((list) => (
            <li
              key={list.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid gray",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "30px" }}>{list.name}</div>
              <div style={{ fontSize: "20px" }}>{list.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
