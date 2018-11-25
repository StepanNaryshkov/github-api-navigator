import React from 'react';
import styles from './styles.module.css';
import Loader from '../../components/Loader';

// const user = {
//   "login": "stepan",
//   "id": 11852,
//   "node_id": "MDQ6VXNlcjExODUy",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/11852?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/stepan",
//   "html_url": "https://github.com/stepan",
//   "followers_url": "https://api.github.com/users/stepan/followers",
//   "following_url": "https://api.github.com/users/stepan/following{/other_user}",
//   "gists_url": "https://api.github.com/users/stepan/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/stepan/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/stepan/subscriptions",
//   "organizations_url": "https://api.github.com/users/stepan/orgs",
//   "repos_url": "https://api.github.com/users/stepan/repos",
//   "events_url": "https://api.github.com/users/stepan/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/stepan/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Stepan Grigoryan",
//   "company": null,
//   "blog": "",
//   "location": "San Francisco, CA",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "public_repos": 10,
//   "public_gists": 1,
//   "followers": 16,
//   "following": 9,
//   "created_at": "2008-05-29T10:06:37Z",
//   "updated_at": "2018-11-08T15:58:36Z"
// };

const Component = ({ user, getUsers, fetching }) => {
  return (
    <div className={styles.container}>
      <h1>Github API Navigator</h1>
      <form>
        <label htmlFor="input" className={styles.label}>
          Search
        </label>
        <input
          className={styles.input}
          type="text"
          id="input"
          onChange={event => getUsers(event.target.value)}
        />
      </form>
      {fetching && <Loader />}
      {user && (
        <ul>
          <li className={styles.item}>
            <img src={user.avatar_url} alt={user.name} height={40} width={40} />
          </li>
          <li className={styles.item}>
            <a href={user.html_url}>{user.html_url}</a>
          </li>
          <li className={styles.item}>{user.name}</li>
          <li className={styles.item}>{user.location}</li>
          <li className={styles.item}>User ID: {user.id}</li>
          <li className={styles.item}>Type: {user.type}</li>
        </ul>
      )}
    </div>
  );
};

export default Component;
