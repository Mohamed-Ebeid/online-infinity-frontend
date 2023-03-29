import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { url } from "../../helper/helper.js";
import Link from "next/link";

export async function getServerSideProps() {
	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			courses: data,
		},
	};
}

export default function index({ courses }) {
	const { push } = useRouter();
	useEffect(() => {
		if (localStorage.getItem("user") !== "admin") {
			push("/");
		}
	}, []);

	const handleAdd = () => {
		push("/");
	};

	return (
		<div className="mt-3 mx-1">
			<h1 className="text-center mb-3 bg-primary text-white p-1">
				All Courses
			</h1>
			<div className="pt-3 bg-light">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Instructor</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					{courses?.map((c) => (
						<tbody key={c._id}>
							<tr>
								<td>
									<Link href={"/course/" + c._id}>{c.name}</Link>
								</td>
								<td>{c.instructor}</td>
								<td>
									<Link href={"/"}>Edit</Link>
									<span> or </span>
									<Link href={"/"}>Delete</Link>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
			<div className="text-center">
				<button className="btn btn-primary" onClick={() => push("/course/add")}>
					Add a new course
				</button>
			</div>
		</div>
	);
}
