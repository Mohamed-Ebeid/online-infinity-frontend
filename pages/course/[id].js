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
	return (
		<div>
			<h1>Course Details</h1>
			<p>{course?.name}</p>
		</div>
	);
}
