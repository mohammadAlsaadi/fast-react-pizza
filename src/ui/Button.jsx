import { Link } from 'react-router-dom';

function Button({ disabled, children, to }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
