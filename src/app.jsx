import Pit from './Pet';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Search from './Search';
import Notfound from './Notfound';
import Detailes from './Detailes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';
import PitProvider from './PitContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Navbar';
import Result from './Result';
import Mypit from './Mypit';
// import { ThemeProvider } from './ThemeProvider.js';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      cacheTime: Infinity,
      staleTime: 60 * 1000 * 10, // 1 minute
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <header>
          <Link to="">
            <h1>Adopt me </h1>
          </Link>
        </header>
        <div className="container">
          <ErrorBoundary>
            {/* <ThemeProvider> */}
            <PitProvider>
              <Routes>
                <Route path="/detailes/:id" element={<Detailes />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/mypit" element={<Mypit />} />
                <Route path="/result" element={<Result />} />
                <Route path="/" element={<Search />} />
              </Routes>
            </PitProvider>
            {/* </ThemeProvider> */}
          </ErrorBoundary>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
