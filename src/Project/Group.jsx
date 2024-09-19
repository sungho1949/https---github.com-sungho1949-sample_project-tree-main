import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Group() {
  const { groupName } = useParams();
  const [description, setDescription] = useState("");
  const [savedDescription, setSavedDescription] = useState("");

  useEffect(() => {
    const storedDescription = localStorage.getItem(`group-${groupName}-description`);
    if (storedDescription) {
      setSavedDescription(storedDescription);
    }
  }, [groupName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`group-${groupName}-description`, description);
    setSavedDescription(description);
    setDescription("");
  };

  return (
    <div>
      <h1>그룹: {groupName}</h1>
      <p>그룹소개: {savedDescription}</p>
      <form onSubmit={handleSubmit}>
        <label>
          그룹소개 입력:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </label>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default Group;