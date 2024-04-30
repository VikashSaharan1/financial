export const FormatDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    const diffInDays = Math.floor((today - inputDate) / (1000 * 60 * 60 * 24));
  
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays <= 7) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[inputDate.getDay()];
    } else {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return inputDate.toLocaleDateString('en-US', options);
    }
};