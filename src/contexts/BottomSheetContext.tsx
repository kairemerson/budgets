import {BottomSheet} from "@/components/BottomSheet";
import { createContext, ReactNode, useContext, useState } from "react";



type BotonSheetOptions = {
    title?: string
    content: ReactNode
}

type BottonSheetContextData = {
    open: (options: BotonSheetOptions) => void
    close: () => void
}

const BottomSheetContext = createContext({} as BottonSheetContextData)

export function BottomSheetProvider({children}: {children: ReactNode}) {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<ReactNode>(null)

    function open({title, content}: BotonSheetOptions){
        setTitle(title)
        setContent(content)
        setVisible(true)
    }

    function close() {
        setVisible(false)
    }

    return (
        <BottomSheetContext.Provider value={{close, open}}>
            {children}

            {visible && (
                <BottomSheet title={title} onClose={close}>
                    {content}
                </BottomSheet>
            )}
        </BottomSheetContext.Provider>
    )
}

export function useBottomSheet() {
    return useContext(BottomSheetContext)
}