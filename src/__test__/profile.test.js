import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Profile from '../component/Profile';

describe('Profile', () => {
  test('renders Profile component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
