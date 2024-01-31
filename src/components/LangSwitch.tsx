import { FormattedMessage } from "react-intl";
import { motion as m } from "framer-motion";
import { Dropdown } from "flowbite-react";
import ArrowIcon from "../assets/icons/arrow-down.svg?react";
import { twMerge } from "tailwind-merge";

const languages = [
  { name: "conf.lang.es", code: "es-CL" },
  { name: "conf.lang.en", code: "en-US" },
];

type langProps = {
  locale: string;
  onLocaleChange: (locale: string) => void;
};

const baseClass =
  "flex-grow p-2 rounded-md mb-2 text-center min-w-28 justify-around";

export default function LangSwitch({ locale, onLocaleChange }: langProps) {
  console.log(locale);
  function LangDropdownButton() {
    return (
      <div className="flex flex-row p-1 items-center text-base">
        <span className="hover:text-gray-800">
          <FormattedMessage id="navbar.language" />
        </span>
        <ArrowIcon className="mt-[5px] h-4 w-4 stroke-2" />
      </div>
    );
  }
  return (
    <>
      <Dropdown
        arrowIcon={false}
        inline
        className="p-3 rounded-lg"
        label={<LangDropdownButton />}
      >
        <m.div
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component appears
          exit={{ opacity: 0, y: 20 }} // Animation when component exits
          transition={{ duration: 0.5 }} // Animation duration
        >
          {languages.map((item, i) => (
            <Dropdown.Item
              className={
                (twMerge(
                  baseClass,
                  locale === item.code ? "bg-gray-200" : "hover:bg-gray-100 hover:font-medium",
                  i === languages.length - 1 ? "mb-0" : ""
                )
                )
              }
              onClick={() => {
                onLocaleChange(item.code);
              }}
            >
              <div>
                <FormattedMessage id={item.name} />
              </div>
            </Dropdown.Item>
          ))}
        </m.div>
      </Dropdown>
    </>
  );
}
