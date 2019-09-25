import { createContext } from "react";

// pass a hook to createContext: a state and an updater function
const ThemeContext = createContext(["magenta", () => {}]);

export default ThemeContext;
