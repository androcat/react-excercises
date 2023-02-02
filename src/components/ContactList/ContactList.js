import { useState } from "react";

function ContactList({ addPerson, persons }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const contactsHTML = persons.map((person, index) => (
    <li key={index}>
      <h1>
        Name: {person.firstName} {person.lastName}
      </h1>
      <p>Address: {person.address}</p>
      <p>Address: {person.phoneNumber}</p>
    </li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName,
      lastName,
      address,
      phoneNumber,
    };
    addPerson(newPerson);
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <>
      <form className="personForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" name="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="form-control"
            placeholder="Alex"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" name="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="form-control"
            placeholder="Smith"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" name="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="form-control"
            placeholder="123 Lemon Lane"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="phoneNumber"
            name="phoneNumber"
            className="form-label"
          >
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className="form-control"
            placeholder="5555555555"
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <ul className="contactList">{contactsHTML}</ul>
    </>
  );
}

export default ContactList;
