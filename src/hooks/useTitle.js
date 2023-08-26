import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | ChefZone`
    }, [title])
}

export default useTitle;