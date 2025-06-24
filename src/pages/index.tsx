import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="陈记CHANGE">
      <main>
        <div className={styles.container}>
          <div className={styles.bannerGrid}>
            <section className={`${styles.section} ${styles.headerSection}`}>
              <div className={styles.sectionOverlay}>
                <div className={styles.bannerHeader}>
                  <Heading as="h2">陈记</Heading>
                  <Heading as="h2">CHANGE</Heading>
                </div>
                <div
                  className={`${styles.leftBanner} ${styles.responsiveBanner}`}
                >
                  <p className={styles.paragraph}>
                    "陈" (Chen) is my family name.
                  </p>
                  <p className={styles.paragraph}>
                    "记" (Ji) means record, notes and memories in Chinese.
                  </p>
                  <p className={styles.paragraph}>
                    Together "陈记" shares a similar pronunciation with
                    "CHANGE".
                  </p>
                </div>
                <div className={styles.rightBanner}></div>
              </div>
            </section>
          </div>
          <div className={styles.sectionGrid}>
            <section className={`${styles.section} ${styles.notebookSection}`}>
              <div className={styles.sectionOverlay}>
                <div className={styles.sectionContent}>
                  <Heading as="h2">📚 My Notebook</Heading>
                  <p>
                    A curated collection of course notes, technical
                    documentation, and learning resources organized by topic.
                    Browse through my study materials and personal knowledge
                    base.
                  </p>
                  <Link className={styles.button} to="/docs/intro">
                    View Notes
                  </Link>
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.blogSection}`}>
              <div className={styles.sectionOverlay}>
                <div className={styles.sectionContent}>
                  <Heading as="h2">✍️ My Blog</Heading>
                  <p>
                    Personal reflections, project updates, and technical
                    articles that document my learning journey and discoveries
                    in software development.
                  </p>
                  <Link className={styles.button} to="/blog">
                    Read Blog
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
