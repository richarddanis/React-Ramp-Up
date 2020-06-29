import { useRef } from "react"

export const useCountRender = ({componentName}) => {
    const renders = useRef(0);
    console.log(componentName + " renders: "+ renders.current++);
}