import React from 'react';
import Button, { BgType, ButtonType } from './components/Button/button';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button btnType={ButtonType.Primary} bgType={BgType.Concave}>
					Hello
				</Button>
				<Button btnType={ButtonType.Primary} bgType={BgType.Convex}>
					Hello
				</Button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
