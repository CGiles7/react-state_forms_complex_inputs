import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    member: false,
    comment: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `${formData.name}`,
      `${formData.age}`,
      formData.member,
      `${formData.comment}`
    );
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="referral">
        How old are you?
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">-- Select an Option --</option>
          <option value="no answer">Prefer not to say</option>
          <option value="0-19">0-19</option>
          <option value="20-39">20-39</option>
          <option value="40-59">40-59</option>
          <option value="60+">60+</option>
        </select>
      </label>
      <br />
      <label>
        New Member
        <input
          id="new-member"
          type="checkbox"
          name="member"
          onChange={handleChange}
          checked={formData.member}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          name="comment"
          onChange={handleChange}
          rows={4}
          cols={50}
          value={formData.comment}
          placeholder="Enter your comment here..."
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
