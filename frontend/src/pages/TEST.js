import { useState } from "react";

const TEST = () => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [message, setMessage] = useState("");

  const handleRequest = async () => {
    const data = await fetchapi();
    setName(data.users.userone.name);
    setSurname(data.users.userone.surname);
  };
  const fetchapi = async () => {
    const res = await fetch("../api/users");
    const data = await res.json();
    return data;
  };
  const handleResponse = async () => {
    const req = await fetch("../api", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: message,
    });
    console.log("data:message ===", message);
  };

  return (
    <div className="border-black border-2 text-black">
      <button className="border-black border-2" onClick={handleRequest}>
        Make request
      </button>
      {name != null ? (
        <>
          <p className="border-black border-2 text-black">Name; {name}</p>
          <p className="border-black border-2 text-black">Surname; {surname}</p>
        </>
      ) : (
        ""
      )}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-black border-2"
        type="text"
        id="message"
        name="message"
      />
      <button onClick={handleResponse} className="border-black border-2">
        Send to server
      </button>
    </div>
  );
};

export default TEST;
