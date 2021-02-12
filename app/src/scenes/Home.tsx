import React from 'react';
import cx from 'classnames';

import styles from './Home.module.scss';

interface Props {
    placeholder: any;
}

const Home: React.FC<Props> = ({ placeholder }: Props) => (
    <div>Home exists!</div>
);

export default Home;
