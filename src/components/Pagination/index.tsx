import { useState } from "react"

const Pagination = () => {
    const [page, setPage] = useState<number>(1)

    const handleButtonPress = (pageNum: number) => {
        setPage(pageNum)
    }

    return (
        <div className="flex justify-between w-full pt-5">
            <button onClick={() => handleButtonPress(page-1)}>Previous</button>
            <div>
                <button onClick={() => handleButtonPress(page-1)}>{page-1}</button>
                <button onClick={() => handleButtonPress(page)}>{page}</button>
                <button onClick={() => handleButtonPress(page+1)}>{page+1}</button>
            </div>
            <button onClick={() => handleButtonPress(page+1)}>Next</button>
        </div>
    )
}
export default Pagination