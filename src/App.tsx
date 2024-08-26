import './App.css'
import pages from "./pages/pages.ts"
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                {pages.map(page => {
                    const {path, Component, content} = page;

                    return (
                        <Route
                            path={path}
                            element={<Component content={content}/>}
                        />
                    )
                })}
            </Routes>

        </div>
    )
}

export default App
