import React, { ReactElement } from 'react';

import s from './Input.module.sass';

export const Input = (): ReactElement => (
  <div className={s.centered}>
    <div className={s.group}>
      <input type="text" className={s.superInput} id="domId" required />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="domId" className={s.superLabel}>
        Name
      </label>
      <div className={s.bar} />
    </div>
  </div>
);
