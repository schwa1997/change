import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container">
        <div className={styles.bannerGrid}>
          <section className={styles.section}>
            <div className={styles.bannerContent}>
              <Heading as="h2">❓ 陈记CHANGE</Heading>
              <p className={styles.paragraph}>
                "陈" (Chen) is my family name, representing my identity and heritage.
              </p>
              <p className={styles.paragraph}>
                "记" (Ji) means record, notes and memories in Chinese.
              </p>
              <p className={styles.paragraph}>
                 Together "陈记" shares a similar pronunciation with "CHANGE".
              </p>
              <p className={styles.paragraph}>
                "陈记"也有成绩的谐音，寓意取得更好的成绩。
              </p>
            </div>
          </section>
        </div>
          <div className={styles.sectionGrid}>
            <section className={styles.section}>
              <div className={styles.sectionContent}>
                <Heading as="h2">📚 My Notebook</Heading>
                <p>
                  A curated collection of course notes, technical documentation, and learning resources
                  organized by topic. Browse through my study materials and personal knowledge base.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro"
                >
                  View Notes
                </Link>
              </div>
            </section>
            <section className={styles.section}>
              <div className={styles.sectionContent}>
                <Heading as="h2">✍️ My Blog</Heading>
                <p>
                  Personal reflections, project updates, and technical articles that document
                  my learning journey and discoveries in software development.
                </p>
                <Link className="button button--primary button--lg" to="/blog">
                  Read Blog
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
