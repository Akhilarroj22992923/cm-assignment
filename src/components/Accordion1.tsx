import React, { useState } from 'react';
import CelebrityItem from './CelebrityItem';

type User = {
  first: string;
  last: string;
  dob: string;
  gender: string;
  country: string;
  description: string;
  picture: string;
};

type AccordionProps = {
  user: User;
  isOpen: boolean;
  toggleAccordion: () => void;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  users: User[];
  index: number;
};

const Accordion: React.FC<AccordionProps> = ({ user, isOpen, toggleAccordion, setUsers, users, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);
  const [hasChanged, setHasChanged] = useState(false);

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedUser(user); // Revert to initial user details
    setHasChanged(false);
  };

  const handleSave = () => {
    setUsers(users.map((u, i) => (i === index ? editedUser : u)));
    setIsEditing(false);
    setHasChanged(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.first} ${user.last}?`)) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
    setHasChanged(true);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <img src={user.picture} alt={user.first} />
        <h2>{user.first} {user.last}</h2>
        <button>{isOpen ? "-" : "+"}</button>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {isEditing ? (
            <div>
              <div className="field-grid">
                <div>
                  <label>Age</label>
                  <input type="text" value={calculateAge(user.dob) + " years"} disabled />
                </div>
                <div>
                  <label>Gender</label>
                  <select name="gender" value={editedUser.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather not say">Rather not say</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label>Country</label>
                  <input type="text" name="country" value={editedUser.country} onChange={handleChange} />
                </div>
              </div>
              <label>Description</label>
              <textarea name="description" value={editedUser.description} onChange={handleChange}></textarea>
              <div className="button-group">
                <button className="save-btn" disabled={!hasChanged} onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={handleEditToggle}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <p><strong>Age:</strong> {calculateAge(user.dob)} Years</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Country:</strong> {user.country}</p>
              <p><strong>Description:</strong> {user.description}</p>
              <div className="button-group">
                {calculateAge(user.dob) >= 18 && (
                  <button onClick={handleEditToggle}>Edit</button>
                )}
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
