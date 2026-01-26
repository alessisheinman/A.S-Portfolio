import Landing from './pages/Landing';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>
  );
}

export default App;
