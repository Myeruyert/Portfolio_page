import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0 gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">MERY</h1>
      <div className="flex flex-col sm:flex-row text-base items-center gap-4 sm:gap-6">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mr-0 sm:mr-6">
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Work</li>
          <li className="cursor-pointer hover:text-gray-600">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-600">Contact</li>
        </ul>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500">
            {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
          <button className="bg-black text-white rounded-lg py-1.5 px-4">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// const NavButtons = () => {
//   const [theme, SetTheme] = useState(true);
//   return (
//     <div className="flex items-center">
//       {theme ? (
//         <MdOutlineLightMode
//           onClick={() => {
//             console.log("dark");
//             SetTheme(false);
//           }}
//         />
//       ) : (
//         <MdOutlineDarktMode />
//       )}
//     </div>
//   );
// };

// const ModeIcon = ({ theme }) => {
//   if (theme) {
//     return (
//       <MdOutlineLightMode
//         onClick={() => {
//           console.log("dark");
//           SetTheme(false);
//         }}
//       />
//     );
//   } else {
//     return <MdOutlineDarktMode />;
//   }
// };
