import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import UpBtn from "../components/UpBtn";

function JanTTopic() {
	const { candidato } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [content, setContent] = useState("");

	useEffect(() => {
		import(`../markdown/${candidato}.md`)
			.then(res => {
				return fetch(res.default);
			})
			.then(response => {
				return response.text();
			})
			.then(text => {
				setContent(text);
			})
			.catch(err => {
				console.log(err);
			});
	});

	useEffect(() => {
		import(`../data/${candidato}`)
			.then(res => {
				const importData = res.default;
				setData(importData);
			})
			.catch(err => {
				setError(true);
			});
	});

	if (error) {
		return (
			<div className="text-center my-5">
				<h1>404 Pagina no encontrada</h1>
			</div>
		);
	}

	if (!data) {
		return "Loaging...";
	}

	return (
		<>
			<Navbar />
			<div id="main-content" className="container mt-5 pb-5">
				<h1 className="text-center mb-5">{data.name}</h1>

				<div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-5">
					{data.proposals.map(proposal => (
						<div className="col">
							<div className="border border-primary p-2 text-center h-100">
								<a href={`${proposal.link}`} className="text-decoration-none">
									<span style={{ color: "black" }}> {proposal.name}</span>
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="text-container mt-5">
					<Markdown>{content}</Markdown>
				</div>
			</div>

			<UpBtn />
		</>
	);
}

export default JanTTopic;
