import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { routes } from "./routes"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                render={(props) => (<route.component  {...props} />)}
              >
              </Route>
            ))
          }
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
