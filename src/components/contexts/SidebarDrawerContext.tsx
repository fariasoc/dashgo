import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";

interface SideDrawerProviderProps {
  children: ReactNode;
}

type SideDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SideDrawerContextData );

export function SideDrawerProvider({ children  }: SideDrawerProviderProps){

  const disclosure = useDisclosure()

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
      </SidebarDrawerContext.Provider>
  )
}