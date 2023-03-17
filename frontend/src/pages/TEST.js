import { useState, useEffect } from "react";

const TEST = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameCorectness, setUsernameCorectness] = useState(true);
  const [passwordCorectness, setPasswordCorectness] = useState(true);

  const usernameInfo = [
    "Username can't contain special characters",
    "Username already taken",
  ];

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const corectnessCheck = (str) => {
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return special.test(str);
  };

  useEffect(() => {
    setUsernameCorectness(!corectnessCheck(username));
    setPasswordCorectness(corectnessCheck(password));
  });

  // SIMULATE LOGIN OR REGISTER
  const handleLogin = async () => {
    await fetch("../api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        method: "sign-in",
      }),
    });
  };
  const handleRegister = async () => {
    await fetch("../api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        method: "register",
      }),
    });
  };

  return (
    <>
      <div className="bg-[#121212] flex justify-center w-full h-full">
        <div className="w-[80%] bg-[#151515] border-l-2 border-r-2 border-lime-500">
          <div className="flex justify-center">
            <h1 className="text-7xl tracking-widest font-bold text-lime-500 mt-2">
              Sign In
            </h1>
          </div>
          {/* SIMULATION OF LOGIN AND REGISTER */}
          <div className="bg-[#353535] flex justify-center">
            <form className="flex justify-center items-center flex-col">
              <div className="mt-5 flex justify-center items-center flex-col">
                <h2 className="text-white">Pass your username</h2>
                <input
                  className="text-black"
                  type="text"
                  placeholder="Username..."
                  onChange={(e) => handleUsernameChange(e)}
                  value={username}
                />
                {usernameCorectness ? (
                  <h3 className="mt-2 text-transparent text-xs tracking-widest max-sm:text-center">
                    {usernameInfo}
                  </h3>
                ) : (
                  <h3 className="mt-2 text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    {usernameInfo}
                  </h3>
                )}
              </div>
              <div className="mt-5 flex justify-center items-center flex-col">
                <h2 className="text-white">Pass your password</h2>
                <input
                  className="text-black "
                  type="password"
                  placeholder="Psst..."
                  onChange={(e) => handlePasswordChange(e)}
                  value={password}
                />
                {passwordCorectness ? (
                  <h3 className="mt-2 text-transparent text-xs tracking-widest">
                    Password must contain special characters
                  </h3>
                ) : (
                  <h3 className="mt-2 text-[#F87474] text-xs tracking-widest animate-slideleft ">
                    Password must contain at least one special character
                  </h3>
                )}
              </div>
              <button
                onClick={handleLogin}
                className="mt-2 mb-2 bg-lime-500 p-2 text-lg rounded-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] flex justify-center w-full h-full">
        <div className="w-[80%] bg-[#151515] border-l-2 border-r-2 border-lime-500">
          <div className="flex justify-center">
            <h1 className="text-7xl tracking-widest font-bold text-lime-500 mt-2">
              Register
            </h1>
          </div>
          {/* SIMULATION OF LOGIN AND REGISTER */}
          <div className="bg-[#353535] flex justify-center">
            <form className="flex justify-center items-center flex-col">
              <div className="mt-5 flex justify-center items-center flex-col">
                <h2 className="text-white">Pass your username</h2>
                <input
                  className="text-black"
                  type="text"
                  placeholder="Username..."
                  onChange={(e) => handleUsernameChange(e)}
                  value={username}
                />
                {usernameCorectness ? (
                  <h3 className="mt-2 text-transparent text-xs tracking-widest max-sm:text-center">
                    {usernameInfo}
                  </h3>
                ) : (
                  <h3 className="mt-2 text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    {usernameInfo}
                  </h3>
                )}
              </div>
              <div className="mt-5 flex justify-center items-center flex-col">
                <h2 className="text-white">Pass your password</h2>
                <input
                  className="text-black "
                  type="password"
                  placeholder="Psst..."
                  onChange={(e) => handlePasswordChange(e)}
                  value={password}
                />
                {passwordCorectness ? (
                  <h3 className="mt-2 text-transparent text-xs tracking-widest">
                    Password must contain special characters
                  </h3>
                ) : (
                  <h3 className="mt-2 text-[#F87474] text-xs tracking-widest animate-slideleft ">
                    Password must contain at least one special character
                  </h3>
                )}
              </div>
              <button
                onClick={handleRegister}
                className="mt-2 mb-2 bg-lime-500 p-2 text-lg rounded-lg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TEST;
