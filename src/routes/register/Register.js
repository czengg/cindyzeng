/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Register.css';

function Register() {
  return (
    <Layout header="fiveMinuteJournal">
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.lead}>Sign Up</h1>
          <form method="post">
            <div className={s.formGroup}>
              <input
                className={s.input}
                id="email"
                type="text"
                name="email"
                placeholder="email"
                autoFocus
              />
            </div>
            <div className={s.formGroup}>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Register &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

Register.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Register);
