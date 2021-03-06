import Container from '@/components/container'

import { useEpisodes } from '@/lib/swr-hooks'
import Episodes from '@/components/episodes';
import { Button } from '@material-ui/core';
import { useState } from 'react';


export default function IndexPage() {
  let [parentTconst, plaftormInputProps] = useRadioButtons("series");
  const { episodes, isLoading } = useEpisodes(parentTconst)

  return (
    <div>
      <form>
        <div className="container" style={{marginBottom: 40}}>
          <div className="row">
            <div className="col">
              <div className="custom-control custom-radio">
                <input
                  value="tt0944947"
                  checked={parentTconst === "tt0944947"}
                  {...plaftormInputProps}
                />
                <label className="custom-control-label">Game of Thrones</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="custom-control custom-radio">
                <input
                  value="tt0903747"
                  checked={parentTconst === "tt0903747"}
                  {...plaftormInputProps}
                />
                <label className="custom-control-label">Breaking Bad</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="custom-control custom-radio">
                <input
                  value="tt8111088"
                  checked={parentTconst === "tt8111088"}
                  {...plaftormInputProps}
                />
                <label className="custom-control-label">The Mandalorian</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="custom-control custom-radio">
                <input
                  value="tt2861424"
                  checked={parentTconst === "tt2861424"}
                  {...plaftormInputProps}
                />
                <label className="custom-control-label">Rick and Morty</label>
              </div>
            </div>
          </div>
        </div>
      </form>

      {isLoading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> : null
      }

      <Container>
        <Episodes episodes={episodes} />
      </Container>
    </div>
  )
}


function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}
