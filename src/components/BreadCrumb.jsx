import { Link } from "react-router-dom";

const ArrowRight = () => (
  <svg
    className="w-3 h-3 mx-1 text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
);

const BreadCrumb = ({ links }) => (
  <nav className="flex px-6 py-3 rounded-lg">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium hover:text-primary"
        >
          <svg
            className="w-3 h-3 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          Beranda
        </Link>
      </li>
      {links.map((link, index) => (
        <li key={index}>
          <div className="flex items-center">
            <ArrowRight />
            <Link
              to={link.link}
              className="ml-1 text-sm font-medium hover:text-primary md:ml-2"
            >
              {link.text}
            </Link>
          </div>
        </li>
      ))}
    </ol>
  </nav>
);

export default BreadCrumb;
