import { Link } from "react-router";

function Button({ children, disabled, to, type, onClick }) {
  const base = ` text-sm uppercase font-semibold  inline-block
            rounded-[10px]  transition-colors duration-300  flex justify-center
          items-center disabled:cursor-not-allowed  whitespace-nowrap `;

  const styles = {
    primary: base + " py-4 px-8 sm:px-12 sm:py-4 bg-primary  hover:bg-hover text-white",
    primaryXl: base + " py-4 px-8 sm:px-20 sm:py-6 bg-primary  hover:bg-hover text-white",
    primaryXlMoreW: base + " py-4 px-10 sm:px-[90px] sm:py-6 bg-primary  hover:bg-hover text-white",
    primaryTrans: base + " py-4 px-8 sm:px-12 sm:py-4 bg-white text-primary w-full    hover:bg-primary hover:text-white border border-hover font-mons tracking-wider ",
    round: base + "py-1  md:px-3 md:py-2 px-3.5 text-xs mx-2",
    secondary: ` text-sm border border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide
            rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 
           focus:outline-none focus:ring focus:ring-stone-200 focus-offset-4  focus:bg-stone-300
           disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5  `,
    linkBtn:`decoration-1	underline text-primary text-[20px] font-semibold`
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
