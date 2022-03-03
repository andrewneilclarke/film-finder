interface Props {
    averageScore: number
}

const Rating: React.FC<Props> = ({ averageScore }) => {
    return (
        <div className="rating">
            {averageScore > 68 ? (
                <div style={{ backgroundColor: "#5dc77d", height: '3em', width: '3em', borderRadius: '100%' }}>Yes</div>
            ) : (
                <div style={{ backgroundColor: "red", height: '3em', width: '3em', borderRadius: '100%' }}>No</div>
            )}
        </div>
    )
}

export default Rating;