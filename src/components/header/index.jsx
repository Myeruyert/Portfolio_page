import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-3xl font-bold">TOM</h1>
      <div className="flex text-base items-center gap-6">
        <ul className="flex gap-6 mr-6">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
        <button className="bg-black text-white rounded-lg py-1.5 px-4">
          Download CV
        </button>
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
