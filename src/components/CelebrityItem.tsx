import React, { useState } from 'react';

interface CelebrityItemProps {
  celebrity: any;
  onDelete: (id: number) => void;
}

const CelebrityItem: React.FC<CelebrityItemProps> = ({ celebrity, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(celebrity);
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

  const handleAccordionClick = () => {
    if (!isEditing) {
      setIsOpen(!isOpen);
    }
  };

  const handleEditClick = () => {
    if (calculateAge(celebrity.dob) >= 18) {
      setIsEditing(true);
    } else {
      alert('User is not an adult.');
    }
  };

  const handleSaveClick = () => {
    if (hasChanged) {
      // save edited details logic
      setIsEditing(false);
      setHasChanged(false);
    }
  };

  const handleCancelClick = () => {
    setEditedDetails(celebrity);
    setIsEditing(false);
    setHasChanged(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
    setHasChanged(true);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <img src={celebrity.picture} alt={celebrity.first} />
        <h2>{`${celebrity.first} ${celebrity.last}`}</h2>
        <button>{isOpen ? '-' : '+'}</button>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {!isEditing ? (
            <div>
              <div className="field-container">
                <div className="field">
                  <div className="field-label">Age</div>
                  <div className="field-content">{calculateAge(celebrity.dob)} Years</div>
                </div>
                <div className="field">
                  <div className="field-label">Gender</div>
                  <div className="field-content">{celebrity.gender}</div>
                </div>
                <div className="field">
                  <div className="field-label">Country</div>
                  <div className="field-content">{celebrity.country}</div>
                </div>
              </div>
              <div className="description-container">
                <div className="field-label">Description</div>
                <p>{celebrity.description}</p>
              </div>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={() => onDelete(celebrity.id)}>Delete</button>
            </div>
          ) : (
            <div>
              <input type="text" value={calculateAge(celebrity.dob)} disabled />
              <select name="gender" value={editedDetails.gender} onChange={handleInputChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="rather_not_say">Rather not say</option>
                <option value="other">Other</option>
              </select>
              <input name="country" value={editedDetails.country} onChange={handleInputChange} />
              <textarea name="description" value={editedDetails.description} onChange={handleInputChange} />
              <button disabled={!hasChanged} onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CelebrityItem;
