import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar1';
import Accordion from './components/Accordion1';
import './styles/App.css';
import userData from "./data/celebrities.json";

type User = {
  first: string;
  last: string;
  dob: string;
  gender: string;
  country: string;
  description: string;
  picture: string;
};

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users, setUsers] = useState<User[]>(userData);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.first} ${user.last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="app-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by celebrity name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <Accordion
            key={index}
            user={user}
            isOpen={openAccordionIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
            setUsers={setUsers}
            users={users}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;