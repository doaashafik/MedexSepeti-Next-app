import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo_.svg";
import {
  sub_categories_logos,
  main_categories,
  categoriesIds,
  sub_categories,
} from "./Types";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 ">
      <div className="flex-1 px-2 lx:flex-none">
        <Link href="#" className="normal-case text-xl">
          <Image priority width={230} height={55} alt="medex-logo" src={Logo} />
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        {categoriesIds.map((id) => (
          <div className="flex items-stretch p-2" key={id}>
            <div className="dropdown dropdown-end dropdown-bottom">
              <label tabIndex={0}>{main_categories[id]}</label>
              <ul
                tabIndex={0}
                className="custom-dropdown custom-lx-flex-columns z-10 menu dropdown-content p-2 shadow bg-base-100 mt-4"
              >
                <li>
                  <ul>
                    {sub_categories
                      .filter((item) => item.id === id)
                      .map((items) => (
                        <li key={items.name}>
                          <h2 className="font-bold">{items.name}</h2>
                          {
                            <ul className="custom-lx-flex-columns">
                              {items.categories.map((item) => (
                                <li>{item.name}</li>
                              ))}
                            </ul>
                          }
                        </li>
                      ))}
                  </ul>
                </li>
                <li className="custom-lx-flex-none">
                  {sub_categories_logos[1].map((logo) => {
                    return (
                      <Link key={logo} href="#" className="sub-category">
                        <img src={logo} alt="category-logo" />
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
