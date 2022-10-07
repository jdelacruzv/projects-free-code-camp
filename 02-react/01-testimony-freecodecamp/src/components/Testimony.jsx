import React from "react";
import "../styles/Testimony.css";

function Testimony(props) {
	return (
		<div className="container-testimony">
			<img
				className="image-testimony"
				src={require(`../images/testimony-${props.image}.png`)}
				alt={props.name}
			/>
			<div className="container-text-testimony">
				<p className="name-testimony">
					<strong>{props.name}</strong> in {props.country}
				</p>
				<p className="position-testimony">
					{props.position} at <strong>{props.company}</strong>
				</p>
				<p className="text-testimony">"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimony;
