import React from 'react';
import throttle from 'lodash.throttle';
import styles from './styles.module.css';
import Loader from '../../components/Loader';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.throttleOnChange = throttle(this.throttleOnChange.bind(this), 300);
  }

  onChange(event) {
    this.throttleOnChange(event.target.value);
  }

  throttleOnChange(value) {
    if (value) {
      this.props.getUsers(value);
    }
  }
  render() {
    const { fetching, user } = this.props;
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
            onChange={this.onChange}
          />
        </form>
        {fetching && <Loader />}
        {user && (
          <ul>
            <li className={styles.item}>
              <img
                src={user.avatar_url}
                alt={user.name}
                height={40}
                width={40}
              />
            </li>
            <li className={styles.item}>
              <a href={user.html_url}>
                {user.html_url || 'User link: not found'}
              </a>
            </li>
            <li className={styles.item}>
              {user.name || 'User name: not found'}
            </li>
            <li className={styles.item}>
              {user.location || 'User name: not found'}
            </li>
            <li className={styles.item}>User ID: {user.id || 'not found'}</li>
            <li className={styles.item}>Type: {user.type || 'not found'}</li>
          </ul>
        )}
      </div>
    );
  }
}
