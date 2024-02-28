import dayjs from "dayjs";

export function DateArray(range) {
  const currentDay = dayjs();
  const days = [];

  for (let i = -range; i <= range; i++) {
    const date = currentDay.add(i, "day");

    days.push(date.format("YYYY-MM-DD"));
  }

  return days;
}
