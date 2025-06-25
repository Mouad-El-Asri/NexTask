import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import TaskFrom from "@/pages/TaskForm";

function AppRoutes() {
    return (
        <>
            <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/task-form" element={<TaskFrom />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
