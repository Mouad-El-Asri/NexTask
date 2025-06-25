import React from "react";

const TaskForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300">
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-700">
                    Task Form
                </h1>
                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">
                                Task Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter task name"
                            className="input input-bordered w-full focus:ring-2 focus:ring-blue-300 border-gray-300"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">
                                Description
                            </span>
                        </label>
                        <textarea
                            placeholder="Enter task description"
                            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-300 border-gray-300"
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">
                                Status
                            </span>
                        </label>
                        <select className="select select-bordered w-full focus:ring-2 focus:ring-blue-300 border-gray-300">
                            <option value="1">To Do</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full text-lg font-medium"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
