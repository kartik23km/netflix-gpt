export const validateData = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=])(?!.*\\s).{8,20}$/.test(
      password
    );

  const isNameValid = /^[a-zA-Z\s]*$/.test(name);

  if (email && !isEmailValid) return "Email is not valid";
  if (password && !isPasswordValid) return "Password not valid";
  if (name && !isNameValid) return "Name is not valid";

  return null;
};
