import React, { Fragment } from 'react';
import styles from './styles.module.css';

export default class Component extends React.Component {
  componentDidMount() {
    this.props.getUsers('StepanNaryshkov');
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h1>Lol</h1>
      </Fragment>
    );
  }
}
