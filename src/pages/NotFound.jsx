import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center gap-5 text-center px-6 md:px-12"
        >
            <h1 className="text-7xl md:text-9xl lg:text-[162px] tracking-tight font-extrabold text-secondary">
                404
            </h1>
            <p className="text-2xl md:text-4xl tracking-tight font-bold text-primary">
                Sorry, this page isn't available.
            </p>
            <p className="text-base md:text-lg font-light text-neutral">
                The link you followed may be broken, or the page may have been removed.
            </p>
            <Link
                to="/"
                className="btn btn-secondary mt-5 text-sm md:text-base"
            >
                Back to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
