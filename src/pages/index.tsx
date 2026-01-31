import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img
            src="/img/minilux-icon.png"
            alt="Minilux Logo"
            className={styles.heroLogo}
          />
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              Minilux
            </Heading>
            <p className={styles.heroTagline}>
              A simple programming language for scripting, automation and much more!
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--outline button--primary button--lg margin-left--md"
                to="/docs/examples">
                See Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickExample() {
  return (
    <section className={styles.quickExample}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Quick Example
        </Heading>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <pre className={styles.codeBlock}>
              <code>{`# Simple greeting script
$name = "World"
printf("Hello, ", $name, "!\\n")

# Calculate factorial
$n = 5
$result = 1

while ($n > 0) {
    $result = $result * $n
    dec($n, 1)
}

printf("Factorial: ", $result, "\\n")`}</code>
            </pre>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            Install Minilux
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="A minimal experimental scripting language designed for simplicity and learning">
      <HomepageHeader />
      <main>
        <QuickExample />
      </main>
    </Layout>
  );
}
