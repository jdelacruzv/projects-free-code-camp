import "./App.css";
import Testimony from "./components/Testimony";
import { users } from "./data/users";

const showUsers = users.map((user) => {
	return (
		<Testimony
			key={user.name}
			image={user.image}
			name={user.name}
			country={user.country}
			position={user.position}
			company={user.company}
			testimony={user.testimony}
		/>
	);
});

function App() {
	return (
		<div className="App">
			<div className="container-main">
				<h1>Here is what our alumni say about freeCodeCamp:</h1>
				{showUsers}
			</div>
		</div>
	);
}

export default App;
