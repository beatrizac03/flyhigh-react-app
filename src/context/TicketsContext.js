import { createContext, useContext, useState } from "react";
import { findAll, deleteById, save } from "../api/api";

export const TicketsContext = createContext({})

export function TicketsProvider({ children }) {
    const [tickets, setTickets] = useState([])
    
    return(
        <TicketsContext.Provider value={tickets}>
            {children}
        </TicketsContext.Provider>
    )
}

export function useTickets() {
    return useContext(TicketsContext)
}