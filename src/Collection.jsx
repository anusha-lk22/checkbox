import React, { useState } from "react";
const Collection = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div>
        <input type="text" onChange={onChangeId} placeholder="id" />
      </div>
      <div>
        <input type="text" onChange={onChangeName} placeholder="name" />
      </div>
      <div>
        <input type="checkbox" onChange={(e) => e.target.checked} />
      </div>
    </>
  );
};
export default Collection;
