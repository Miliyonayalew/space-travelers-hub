import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Rocket from '../component/Rockets';

describe('Rocket', () => {
  test('renders Rocket component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Rocket />
        </Router>
      </Provider>,
    );
    const rocket = screen.getByTestId('rocket');
    expect(rocket).toEqual(expect.anything());
  });
});
