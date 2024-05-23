import { Fragment } from "react";
import { Menu, Transition, MenuButton } from "@headlessui/react";

import PropTypes from "prop-types";

function MenuTemplate({ name, link }) {
  return (
    <Menu>
      <a
        href={link}
        className="block px-4 py-2 text-sm bg-menu text-white border-1"
      >
        {name}
      </a>
    </Menu>
  );
}

MenuTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function DropDown({ data = [], icon }) {
  console.log("DropDown data prop: ", data);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="justify-content">{icon}</MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu className="absolute md:right-5 right-0 z-10 mt-2 md:w-56 w-max origin-top-right rounded-md bg-menu shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.map((item) => (
              <MenuTemplate key={item.name} name={item.name} link={item.href} />
            ))}
          </div>
        </Menu>
      </Transition>
    </Menu>
  );
}

DropDown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
