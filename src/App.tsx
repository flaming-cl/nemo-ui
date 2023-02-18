import React from 'react';
import Button, {
	BgType,
	ButtonSize,
	ButtonType
} from './components/Button/button';
import Alert from './components/Alert/alert';

function App() {
	return (
		<div className="App">
			<section className="App-header" style={{ background: '#e0e8ee' }}>
				<Button
					btnType={ButtonType.Default}
					bgType={BgType.Concave}
					size={ButtonSize.Small}
				>
					Hello
				</Button>
				<Button btnType={ButtonType.Default} bgType={BgType.Concave}>
					Hello
				</Button>
				<Button
					btnType={ButtonType.Default}
					bgType={BgType.Convex}
					size={ButtonSize.Large}
				>
					Hello
				</Button>
				<Button btnType={ButtonType.Primary} bgType={BgType.Convex}>
					Hello
				</Button>
				<Button btnType={ButtonType.Primary} bgType={BgType.Concave}>
					Hello
				</Button>
				<Button
					btnType={ButtonType.Danger}
					bgType={BgType.Convex}
					className={'dang'}
				>
					Hello
				</Button>
				<Button btnType={ButtonType.Danger} bgType={BgType.Concave}>
					Hello
				</Button>
				<Button btnType={ButtonType.Link} bgType={BgType.Convex}>
					Hello
				</Button>
			</section>
			<section
				className="App-header"
				style={{ background: '#e0e8ee', display: 'flex' }}
			>
				<Alert title="this is Default" type="default" bgType="cv" />
				<Alert title="this is Primary" type="primary" bgType="cv" />
				<Alert title="this is Danger" type="danger" bgType="cv" />
				<Alert title="this is Success" type="success" bgType="cv" />
			</section>
		</div>
	);
}

export default App;
