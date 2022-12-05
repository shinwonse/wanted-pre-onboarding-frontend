export const emailValidation = (email) => {
  const emailRegex = /@/;
  return emailRegex.test(email);
};
