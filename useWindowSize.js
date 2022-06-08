import React from 'react'
export default function useWindowSize(){
    /*if (typeof window !== "undefined"){
        return{ width: 1200, height: 800};
    }*/
    const isSSR = typeof window != "undefined";


    const [windowSize, setWindowSize] = React.useState();

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        });
    }, []);
}