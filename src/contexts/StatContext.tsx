import { createContext, useState } from "react";

export const StatContext: any = createContext({baseAD: [], modifierAD: []});

export default ({ children }: any) => {
    const baseAD: any = useState(60);
    const modifierAD: any = useState(1.0);

    const value = {
        baseAD: baseAD,
        modifierAD: modifierAD
    }

    return <StatContext.Provider value={value}>{children}</StatContext.Provider>
}
