import * as React from 'react';
import { Button } from '@mui/material';
import styles from './applyButton.module.less'

export const ApplyButton = () => {
  return (
    <Button className={styles.button} variant="contained" disableElevation>
      Применить
    </Button>
  );
}
