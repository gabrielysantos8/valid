import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./compostyle.css";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const voltarAoTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`back-to-top ${visible ? "visible" : ""}`}
            onClick={voltarAoTopo}
        >
            <FaArrowUp />
        </button>
    );
}

export default BackToTop;