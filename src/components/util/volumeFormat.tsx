const volumeFormat = (volume: any): any | number | string => {
  return volume >= 1.0e9
    ? `${(volume / 1.0e9).toFixed(2)}B`
    : volume >= 1.0e6
    ? `${(volume / 1.0e6).toFixed(2)}M`
    : volume >= 1.0e3
    ? `${(volume / 1.0e3).toFixed(2)}K`
    : volume;
};

export default volumeFormat;
