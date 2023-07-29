const lightTheme = {
  bg: '#fff',
  text: '#000',
  inputBg: '#fff',
  inputText: '#000',
  inputPlaceholder: '#9e9e9e',
  cardBg: '#fff',
  cardText: '#000',
  pageTextActive: '#00bcd4',
  tabBg: '#fafafa',
  tabTextActive: '#1890ff',
  tabBorder: 'rgba(0, 0, 0, 0.06)',
}

const darkTheme = {
  bg: '#000',
  text: '#e6e6e6',
  inputBg: '#555555',
  inputText: '#fff',
  inputPlaceholder: '#bfbdbd',
  cardBg: '#353535',
  cardText: '#d9d9d9',
  pageTextActive: '#2ae7ff',
  tabBg: '#323232',
  tabTextActive: '#4374ff',
  tabBorder: '#5a5a5a',
}

export const themes: Record<string, Record<string, string | number>> = {
  light: lightTheme,
  dark: darkTheme,
}
