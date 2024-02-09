import { useContext } from "react";
import { ColorTitleContext } from "../context/ColortitleContext";

const UseColorTitleContext = () => {
    const color = useContext(ColorTitleContext)
    return color
}

export default UseColorTitleContext