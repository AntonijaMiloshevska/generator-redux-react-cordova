import React, { PropTypes } from 'react';

import { List, Subheader } from '../../components';

const PostList = ({ posts, onShowDetails }) => (
  <div>
    <Subheader
      title={ posts.length ? 'Results' : 'Loading...' }
    />
    <List
      items={posts}
      onClick={onShowDetails}
    />
  </div>
);

PostList.propTypes = {
  onShowDetails: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostList;
