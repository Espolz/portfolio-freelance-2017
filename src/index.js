import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './theme/globalStyle';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
	module.hot.accept('./containers/App/App', () => {
		const NextApp = require('./containers/App/App').default;
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		);
	});
}