import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"> <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Start from my notes
              </Link>
            </div>
          </div>
        </header></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start from my notes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      < HomepageHeader />
      <main>

        <div className="container">
          <div className={styles.sectionGrid}>
            <section className={styles.section}>
              <div className={styles.sectionContent}>
                <Heading as="h2">📚 My Notebook</Heading>
                <p>
                  Course notes, technical documentation, and learning resources organized by topic.
                  Browse through my study materials and knowledge base.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  View Notes
                </Link>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionContent}>
                <Heading as="h2">✍️ My Blog</Heading>
                <p>
                  Personal thoughts, project updates, and technical articles.
                  Follow along with my learning journey and discoveries.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/blog">
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
