import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Mission from '../component/Missions';

describe('Mission', () => {
  test('renders Mission component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
