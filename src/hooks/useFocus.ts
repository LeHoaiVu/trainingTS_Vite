import { useEffect } from 'react'

export const useFocus = (elId: string) => {
    useEffect(() => {
        const el = document.getElementById(elId)
        if (!el) return
        el.focus()
    }, [elId])
}
