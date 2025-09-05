// App.js

import { BrowserRouter as Router } from "react-router-dom";
import Page from './app/pages/Page';


export default function App() {
  return (
    <div>
    <Router>
      <Page />
    </Router>
    </div>
  );
}
