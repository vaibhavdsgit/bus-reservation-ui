import { render, screen } from '@testing-library/react';
import Hello from './components/Hello';
import EmpData from './components/EmpData';
import SpringBootData from './components/SpringBootData';
import { Provider } from 'react-redux';
import store from './redux/store';
import BusData from './components/BusData';
import AdminData from './components/AdminData';
import RouteData from './components/RouteData';
import ReservationData from './components/ReservationData';
import FeedbackData from './components/FeedbackData';

// Website https://jestjs.io/ 
// learning resources https://jestjs.io/docs/getting-started  
//api https://jestjs.io/docs/api  

// run - 
// npm start 
// afterwards 
// Watch Usage
//  › Press a to run all tests.
//  › Press f to run only failed tests.
//  › Press q to quit watch mode.
//  › Press p to filter by a filename regex pattern.
//  › Press t to filter by a test name regex pattern.
//  › Press Enter to trigger a test run.

// sytnax to write test cases 
// test('a string value that describes this test', () => { });

// beforeAll();
// beforeEach();
// afterAll();
// afterEach();

// use this hook to render a component only once before all the test cases 
beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

test('render Data from AdminData', () => {
  render(
    <Provider store={store} >
      <AdminData />
    </Provider>);
  const linkElement = screen.getByText('Admin Login');
  expect(linkElement).toBeInTheDocument();
});

// positive test case 
test('render Data from EmpData', () => {
  render(
    <Provider store={store} >
      <FeedbackData />
    </Provider>);
  const linkElement = screen.getByText('delete Feedback by FeedbackId');
  expect(linkElement).toBeInTheDocument();
});


// positive test case 
test('render Data from BusData', () => {
  render(
    <Provider store={store} >
      <BusData />
    </Provider>);
  const linkElement = screen.getByText('Add New Bus');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from ReservationData', () => {
  render(
    <Provider store={store} >
      <ReservationData />
    </Provider>);
  const linkElement = screen.getByText('Add New Reservation');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from RouteData', () => {
  render(
    <Provider store={store} >
      <RouteData />
    </Provider>);
  const linkElement = screen.getByText('Route Data');
  expect(linkElement).toBeInTheDocument();
});

// negative test case 
// test('render Data from SpringBootData', () => {
//   render(
//     <Provider store={store} >
//       <SpringBootData />
//     </Provider>);
//   const linkElement = screen.findByText();
//   expect(linkElement).not.toBe('Some other text which is not present in the component.');
// });



// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
