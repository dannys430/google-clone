export const Logo = () => {
  const fullDate = new Date()
  const month = fullDate.getMonth()
  const date = fullDate.getDate()
  
  return month === 11 && date === 25
    ? 'holiday-logo.gif'
    : 'logo.png'
} 

