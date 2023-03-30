import React from "react";
import { useRouter } from "next/router";
import { url } from "../../helper/helper.js";

export async function getServerSideProps(context) {
	const id = context.params.id;
	const res = await fetch(url + "/" + id);
	const data = await res.json();

	return {
		props: {
			course: data,
		},
	};
}

export default function Details({ course }) {
	const { push } = useRouter();
	return (
		<div className="text-center bg-light pt-3">
			<h1>Course Details</h1>
			<div className="pb-3 ">
				<label className="form-label px-1 fw-bolder">Course's Name: </label>
				<p className="fw-semibold"> {course.name}</p>
			</div>
			<div className="pb-3 ">
				<label className="form-label px-1 fw-bolder">
					Course's description:{" "}
				</label>
				<p className="fw-semibold"> {course.description}</p>
			</div>
			<div className="pb-3 ">
				<label className="form-label px-1 fw-bolder">
					Course's instructor:{" "}
				</label>
				<p className="fw-semibold"> {course.instructor}</p>
			</div>
			<div className="pb-3 ">
				<label className="form-label px-1 fw-bolder">Course's duration: </label>
				<p className="fw-semibold"> {course.duration}</p>
			</div>
			<div className="pb-3 ">
				<label className="form-label px-1 fw-bolder">
					Course's number Of Seats:{" "}
				</label>
				<p className="fw-semibold"> {course.numberOfSeats}</p>
			</div>
			<button className="btn btn-danger mb-5" onClick={() => push("/course")}>
				Go Back
			</button>
		</div>
	);
}
