import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //simple login form for the admin
  const [username, setUesrname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking is done in the frontend for simplicity and setting a local storage to protect other routes
    if ((username === "admin") & (password === "admin123")) {
      localStorage.setItem("user", username);
    } else {
      alert("Wrong conditionals!");
    }
  };
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="mt-3 d-flex justify-content-center">
          Welcome to the course assigment
        </h1>
        <div className="m-3">
          <form>
            <div className="mb-3">
              <label for="exampleInput" className="form-label">
                username:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInput"
                onChange={(e) => setUesrname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
