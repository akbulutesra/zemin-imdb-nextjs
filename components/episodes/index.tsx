import Episode from './episode'

function Episodes({ episodes }) {
  if (episodes) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            Season
            </div>

          <div className="col">
            Episode
            </div>

          <div className="col">
            Rating
            </div>

          <div className="col">
            Votes
            </div>
        </div>
        {episodes.map((e) => (

          <Episode
            seasonNumber={e.seasonNumber}
            episodeNumber={e.episodeNumber}
            averageRating={e.averageRating}
            numVotes={e.numVotes} />
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Episodes
