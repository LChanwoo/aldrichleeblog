const color_list = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  gray: 'bg-gray-500',
  white: 'bg-white',
  black: 'bg-black',
  mint: 'bg-green-200',
  ozum: 'bg-yellow-100',
}
const BackColorh1 = ({ color, children }) => <h1 className={color_list[color]}>{children}</h1>

export default BackColorh1
