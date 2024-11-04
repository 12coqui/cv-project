// returns mm/yyyy
export const formatMonthAndYear = date => {
	if (!date) return '';
	const options = { month: 'numeric', year: 'numeric' };
	const newDate = new Date(date);
	const dateFormatted = new Intl.DateTimeFormat('es-ES', options).format(newDate);
	return dateFormatted;
};
