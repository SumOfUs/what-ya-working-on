import React from 'react';
import Linkify from 'react-linkify';

const userMap = {
  '1704880': 'Tuuli Pollanen',
  '1722150': 'Omar Sahyoun',
  '2087877': 'Vincent Martinez',
  '2087879': 'Rodrigo Pavano'
};

const getUser = id => {
  return userMap[id.toString()];
};

const Story = props => {
  const { name, estimate, owned_by_id, description } = props.story;
  console.log(props);
  return(
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className='is-pulled-right'>{estimate} points</div>
            <p className="title is-4">{ name }</p>

            <p className="subtitle is-6">{ getUser(owned_by_id) }</p>
          </div>
        </div>

        <div className="content">
          <Linkify>{description}</Linkify>
        </div>
      </div>
    </div>
  )
}

export default Story;
