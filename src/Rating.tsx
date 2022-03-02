interface Props {
    imdbRating: string
}

const Rating: React.FC<Props> = ({ imdbRating }) => {
    const formatRating = (rating: string) => {
        if (parseFloat(rating) !== null) {
            return (parseFloat(rating))
        }
        console.log(rating)
        console.log(parseFloat(rating))
        return 0
    }
    formatRating(imdbRating)
    return (
        <div className="rating">
            {formatRating(imdbRating) > 7.5 ? (
                <div style={{ backgroundColor: "green", height: '3em', width: '3em', borderRadius: '100%' }}>Yes</div>
            ) : (
                <div style={{ backgroundColor: "red", height: '3em', width: '3em', borderRadius: '100%' }}>No</div>
            )}
        </div>

    )

}

export default Rating;