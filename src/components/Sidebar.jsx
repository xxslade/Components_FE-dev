import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className=" bg-[#1e293b] w-[20vw] h-full text-[bisque] font-['Franklin_Gothic_Medium','Arial_Narrow','Arial',sans-serif]">
      <div className="sticky top-0">
      <div className="font-['Segoe_UI','Tahoma','Geneva','Verdana',sans-serif] text-lg flex items-center justify-center h-[10vh] text-blue-900  bg-blue-300">
        Get started with your element!
      </div>
      <div className="flex flex-col justify-evenly items-center h-[25vh]  ">

        <NavLink
          to="/buttons"
          className={({ isActive }) =>
            `text-white no-underline w-full h-full ${isActive ? "bg-[#516591]" : "bg-[#233753]"
            } flex justify-center items-center text-lg hover:bg-[#475569]`
          }
        >
          Buttons
        </NavLink>

        <NavLink
          to="/navbars"
          className={({ isActive }) =>
            `text-white no-underline w-full h-full ${isActive ? "bg-[#516591]" : "bg-[#233753]"
            } flex justify-center items-center text-lg hover:bg-[#475569]`
          }
        >
          Navbars
        </NavLink>

        <NavLink
          to="/cards"
          className={({ isActive }) =>
            `text-white no-underline w-full h-full ${isActive ? "bg-[#516591]" : "bg-[#233753]"
            } flex justify-center items-center text-lg hover:bg-[#475569]`
          }
        >
          Cards
        </NavLink>

          </div>
      </div>
    </div>
  );
}

export default Sidebar;
