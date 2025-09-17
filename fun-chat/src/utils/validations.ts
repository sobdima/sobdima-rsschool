export function validateLoginForm(
  usernameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  usernameError: HTMLElement,
  passwordError: HTMLElement,
  submitButton: HTMLButtonElement
) {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const isValidField = (value: string) =>
    value.length >= 6 && /^[a-zA-Z0-9]+$/.test(value);

  const getErrorMessage = (fieldName: string, value: string) => {
    if (value.length < 6) return `${fieldName} must be at least 6 characters long`;
    if (!/^[a-zA-Z0-9]+$/.test(value)) return `${fieldName} can only contain Latin letters and numbers`;
    return '';
  };

  // username validation
  const usernameValid = isValidField(username);
  const showUsernameError = !usernameValid && username.length > 0;
  usernameError.textContent = showUsernameError ? getErrorMessage('Username', username) : '';
  usernameError.style.display = showUsernameError ? 'block' : 'none';
  usernameInput.style.borderColor = showUsernameError ? 'red' : '';

  // password validation
  const passwordValid = isValidField(password);
  const showPasswordError = !passwordValid && password.length > 0;
  passwordError.textContent = showPasswordError ? getErrorMessage('Password', password) : '';
  passwordError.style.display = showPasswordError ? 'block' : 'none';
  passwordInput.style.borderColor = showPasswordError ? 'red' : '';

  // Enable/disable submit button
  submitButton.disabled = !(usernameValid && passwordValid);

  return usernameValid && passwordValid;
}