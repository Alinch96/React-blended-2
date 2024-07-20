import { formatDistanceToNow } from 'date-fns';

const formatDateToNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

export default formatDateToNow;
