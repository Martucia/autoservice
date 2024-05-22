export const formatPhone = (phone: string) => {
  const cleanedNumber = phone.replace(/[^\d]/g, '');

  if (cleanedNumber.startsWith('0')) {
    return cleanedNumber;
  }
  return cleanedNumber;
};
