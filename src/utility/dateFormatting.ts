const dateFormatting = (date: string) => {
  return new Date(date).toLocaleString('ru-Ru', {
    second: undefined,
    hour: 'numeric',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    minute: '2-digit',
  });
};

export default dateFormatting;
