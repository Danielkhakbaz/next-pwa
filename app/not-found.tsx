import { Link } from "next-view-transitions";

const NotFound = async () => {
  return (
    <section>
      <h3>404</h3>
      <div>
        <Link href="/">
          <button>Back to the Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
