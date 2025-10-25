function isStrongPassword(password) {
  // Check if password is at least 8 characters
  if (password.length < 8) {
    return false;
  }

  // Check if it contains the word "password" (case-insensitive)
  if (password.toLowerCase().includes("password")) {
    return false;
  }

  // Check if it contains at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return false;
  }

  // If all conditions pass
  return true;
}
