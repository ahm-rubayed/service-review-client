const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `ProShoot - ${title}`
    },[title])
}

export default useTitle;