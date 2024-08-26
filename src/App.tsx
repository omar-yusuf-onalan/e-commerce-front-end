import './App.css'
import pages from "./pages/pages.ts"
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                {pages.map(((page, index) => {
                    const {path, Component, content} = page;

                    return (
                        <Route
                            key={index}
                            path={path}
                            element={<Component {...content}/>}
                        />
                    )
                }))}
            </Routes>

        </div>
    )
}

export default App
