import React, { FC } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

type Props = {
  fetchData: () => void;
};

const RefreshButton: FC<Props> = ({ fetchData }: Props) => {
  return (
    <RefreshIcon
      style={{ color: '#ffffff' }}
      onClick={() => {
        fetchData();
      }}
    />
  );
};

export default RefreshButton;
