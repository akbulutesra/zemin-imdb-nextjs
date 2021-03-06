

function Episode({ seasonNumber, episodeNumber, averageRating, numVotes }) {

  return (
    <div className="row">
      <div className="col">
        {seasonNumber}
      </div>

      <div className="col">
        {episodeNumber}
      </div>

      <div className="col">
        {averageRating}
      </div>

      <div className="col">
        {numVotes}
      </div>
    </div>
  )
}

export default Episode
