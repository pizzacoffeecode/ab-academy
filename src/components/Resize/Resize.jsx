import { React, useState, useEffect, createContext, useContext } from "react";

export const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {

    //* useState initially set to 0 so since window.innerWidth will be undef
    const [ width, setWidth ] = useState(0);
    const [ height, setHeight ] = useState(0);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    //* Run handleWindowResize once to get the initial width/heigh so not undef
    useEffect(() => {
        handleWindowResize();
    }, []); // run once


    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={ { width, height } }>
            { children }
        </viewportContext.Provider>
    );
};

// const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
// const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;


export default ViewportProvider;


/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useViewport = () => {
    /* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
}
// //  https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/







// // const setInitWidth = useEffect(() => {
// //     return window.innerWidth;
// // }, []); // run once


// // const viewportContext = React.createContext({});

// // const Resize = () => {

// //     const [ width, setWidth ] = useState(setInitWidth);
// //     const mobile = 640;

// //     useEffect(() => {
// //         const handleWindowResize = () => setWidth(window.innerWidth)
// //         window.addEventListener("resize", handleWindowResize);

// //         // Return a function from the effect that removes the event listener
// //         return () => window.removeEventListener("resize", handleWindowResize);
// //     }, []);

// //     return width < mobile ? true : false;
// // }
