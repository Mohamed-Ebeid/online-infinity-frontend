import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { url } from "../../helper/helper.js";
import Link from "next/link";

//Fetching all courses
export async function getServerSideProps() {
	try {
		const res = await fetch(url);
		const data = await res.json();

		return {
			props: {
				courses: data,
			},
		};
	} catch {
		return { props: {} };
	}
}

export default function index({ courses, req, res }) {
	const { push } = useRouter();
	//authentication
	useEffect(() => {
		if (localStorage.getItem("user") !== "admin") {
			push("/");
		}
		if (!courses) {
			alert("Could not connect to the backend!");
		}
	}, []);

	//Deleting
	const handleDelete = async (props) => {
		// console.log(props);
		if (confirm(`Are you sure you want to delete ${props[1]}?`)) {
			const options = {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					auth: "admin",
				},
			};
			try {
				const response = await fetch(`${url}/delete/${props[0]}`, options);
				await response.json();
				alert("Course Deleted Successfully!");
				push("/course");
			} catch (e) {
				alert("something went wrong!");
			}
		} else {
			return;
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("user");
		push("/");
	};

	const handleEdit = (id) => {
		push("/course/edit?id=" + id);
		//push("/course/edit");
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
							<th scope="col" className="text-center">
								Name
							</th>
							<th scope="col" className="text-center">
								Instructor
							</th>
							<th scope="col" className="text-center">
								Action
							</th>
						</tr>
					</thead>
					{courses?.map((c) => (
						<tbody key={c._id}>
							<tr>
								<td className="text-center">
									<Link href={"/course/" + c._id}>{c.name}</Link>
								</td>
								<td className="text-center">{c.instructor}</td>
								<td className="text-center">
									<button
										className="btn btn-primary mx-1"
										onClick={() => handleEdit(c._id)}
									>
										Edit
									</button>
									<button
										className="btn btn-danger"
										onClick={() => handleDelete([c._id, c.name])}
									>
										Delete
									</button>
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
				<button className="btn btn-danger mx-3" onClick={() => handleLogout()}>
					Log Out
				</button>
			</div>
		</div>
	);
}
