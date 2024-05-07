function minMeetingRoomsII(intervals) {
  const startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  const endTimes = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);
  let rooms = 0;
  let endIdx = 0;
  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i] < endTimes[endIdx]) rooms++;
    else endIdx++;
  }
  return rooms;
}
