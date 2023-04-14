import { Navigate, Route, Routes } from "react-router-dom"
import {Home, routeMain as routeHome}  from "./home"
import { Categories, routeMain as routeCategories} from "./categories"
import { Search, routeMain as routeSearch } from "./search"
import { Info, routeMain as routeInfo } from "./info"
export const Pages = () => {
    return(
        <Routes>
                <Route path={routeHome()} element={<Home/>}/>
                <Route path={routeCategories()} element={<Categories/>}/>
                <Route path={routeSearch()} element={<Search/>}/>
                <Route path={routeInfo()} element={<Info/>}/>
                <Route path="*"
                    element={<Navigate to='/home' replace/>}
                />

        </Routes>
    )
}