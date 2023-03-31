import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { url } from "../../helper/helper.js";
import { getCookie } from "cookies-next";

//Fetching a single course
export async function getServerSideProps(context) {
	try {
		const id = context.query.id;
		const res = await fetch(url + "/" + id);
		const data = await res.json();

		return {
			props: {
				course: data,
			},
		};
	} catch {
		return {
			props: {
				course: null,
			},
		};
	}
}

export default function edit({ course }) {
	const [name, setName] = useState(course?.name);
	const [numberOfSeats, setNumberOfSeats] = useState(course?.numberOfSeats);
	const [description, seDescription] = useState(course?.description);
	const [instructor, setInstructor] = useState(course?.instructor);
	const [duration, setDuration] = useState(course?.duration);
	const { push } = useRouter();

	useEffect(() => {
		if (course === null) {
			push("/course");
		}
	}, []);

	const handleSubmit = async () => {
		const data = { name, description, instructor, duration, numberOfSeats };
		const JSONdata = await JSON.stringify(data);
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				auth: "admin",
			},
			body: JSONdata,
		};
		fetch(`${url}/add/${course._id}`, options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
		alert("Course Updated Successfully!");
		push("/course");
	};
	return (
		<>
			{
				<div>
					<h1 className="text-center pt-3">Edit a Course:</h1>
					<div className=" py-5 bg-secondary">
						<div className="mx-3">
							<button
								type="submit"
								className="btn btn-danger"
								onClick={() => push("/course")}
							>
								Go back
							</button>
						</div>
						<form className="m-3">
							<div className="mb-3">
								<label className="form-label text-white">Course Name:</label>
								<input
									value={name}
									type="text"
									className="form-control"
									id="exampleInput"
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label text-white">
									Description of the Course:
								</label>
								<input
									value={description}
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									onChange={(e) => seDescription(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label text-white">
									Instructor Name:
								</label>
								<input
									value={instructor}
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									onChange={(e) => setInstructor(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label text-white">
									Duration of the Course:
								</label>
								<input
									value={duration}
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									onChange={(e) => setDuration(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label text-white">
									Number of Seats:
								</label>
								<input
									value={numberOfSeats}
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									onChange={(e) => setNumberOfSeats(e.target.value)}
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
				</div>
			}
		</>
	);
}
