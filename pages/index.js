import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //simple login form for the admin
  const [username, setUesrname] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking is done in the frontend for simplicity and setting a local storage to protect other routes
    if ((username === "admin") & (password === "admin123")) {
      localStorage.setItem("user", username);
      push("course");
    } else {
      alert("Wrong conditionals!");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user") === "admin") {
      push("course");
    }
  }, []);
  return (
    <div className="bg-secondary ">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-3">
        <div className="d-flex justify-content-center bg-primary">
          <h1 className="mt-3 pb-1 px-1 text-white">
            Welcome to the Course Assigment
          </h1>
        </div>

        <div className="m-3 py-5">
          <form>
            <div className="mb-3">
              <label className="form-label text-white">Username:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInput"
                onChange={(e) => setUesrname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Password:</label>
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
