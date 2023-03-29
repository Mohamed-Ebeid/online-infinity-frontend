import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function add() {
	const [name, setName] = useState("");
	const [numberOfSeats, setNumberOfSeats] = useState(0);
	const [description, seDescription] = useState("");
	const [instructor, setInstructor] = useState("");
	const [duration, setDuration] = useState("");
	const { push } = useRouter();

	const handleSubmit = () => {};

	return (
		<div>
			<div className="d-flex justify-content-center bg-primary">
				<h1 className="mt-3 pb-1">Add a Course:</h1>
			</div>

			<div className="m-3 py-5 bg-secondary">
				<form className="m-3">
					<div className="mb-3">
						<label className="form-label text-white">Name:</label>
						<input
							type="text"
							className="form-control"
							id="exampleInput"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label text-white">description:</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							onChange={(e) => seDescription(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label text-white">instructor:</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							onChange={(e) => setInstructor(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label text-white">duration:</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							onChange={(e) => setDuration(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label text-white">Number of Seats:</label>
						<input
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
				<div className="mx-3">
					<button
						type="submit"
						className="btn btn-danger"
						onClick={() => push("/course")}
					>
						Go back
					</button>
				</div>
			</div>
		</div>
	);
}
