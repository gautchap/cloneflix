import Modal from "../components/Modal";
import { Suspense, lazy } from "react";
import FallbackCard from "../components/FallbackCard";
import { useSelector } from "react-redux";

const Card = lazy(() => import("../components/Card"));

const SearchPage = () => {
    const list = useSelector((state) => state.API.search);
    const element = useSelector((state) => state.Modal.element);
    element ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "visible");

    return (
        <>
            {element && <Modal element={element} />}
            <div className="flex w-full flex-wrap justify-evenly">
                {list.map((element) => (
                    <Suspense key={element.id} fallback={<FallbackCard />}>
                        <Card element={element} type={element.type} key={element.id} customClasses={"genre-card"} />
                    </Suspense>
                ))}
            </div>
        </>
    );
};

export default SearchPage;
