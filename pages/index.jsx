import Head from "next/head";
import Link from "next/link";
import AboutMeComponent from "../components/aboutMe/aboutMe";
import HeaderComponent from "../components/header/header";
import ProjectListComponent from "../sections/ProjectListComponent";
import { useQuery } from "@apollo/react-hooks";
import { HEADING } from "../gql/headerContent";

const Home = () => {
  const { loading, error, data } = useQuery(HEADING);
  if (error) return <h1>Error with header component</h1>;
  if (loading) return <h1>Loading the heading...</h1>;

  const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  });
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent bannerUrl={data.content.banner.url} />
      <AboutMeComponent catch_phrase={data.content.catch_phrase} />
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <Link href="/projets" passHref>
            <MyButton />
          </Link>
          <Link href="/projets">
            <a>Projets</a>
          </Link>
          <ProjectListComponent />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
