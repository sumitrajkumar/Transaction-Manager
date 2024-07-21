import Topbar from "./scenes/global/Topbar";
import Customsidebar from "./scenes/global/CustomSidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
import Bar from "./components/BarChart";
import Line from "./components/LineChart";
import Pie from "./components/PieChart";

function App() {
  return (
    <div className="app">
      <Customsidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/line" element={<Line />} />
          <Route path="/pie" element={<Pie />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
