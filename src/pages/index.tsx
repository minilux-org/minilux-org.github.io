import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

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
              <Translate id="homepage.tagline">
                A simple programming language for scripting, automation and much more!
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                <Translate id="homepage.getStarted">Get Started</Translate>
              </Link>
              <Link
                className="button button--outline button--primary button--lg margin-left--md"
                to="/docs/examples">
                <Translate id="homepage.seeExamples">See Examples</Translate>
              </Link>
            </div>

            <div className={styles.extensionButtons}>
              <Link
                className={styles.extButton}
                to="https://open-vsx.org/extension/minilux/minilux/">
                <img src="https://open-vsx.org/favicon.ico" className={styles.extIcon} alt="" />
                <Translate id="homepage.extAntigravity">Get the Minilux extension for antigravity</Translate>
              </Link>
              <Link
                className={styles.extButton}
                to="https://marketplace.visualstudio.com/items?itemName=minilux.minilux">
                <img src="https://code.visualstudio.com/favicon.ico" className={styles.extIcon} alt="" />
                <Translate id="homepage.extVSCode">Get the Minilux extension for VS Code</Translate>
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
          <Translate id="homepage.quickExample.title">Quick Example</Translate>
        </Heading>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <div className={clsx(styles.dot, styles.dotRed)}></div>
                <div className={clsx(styles.dot, styles.dotYellow)}></div>
                <div className={clsx(styles.dot, styles.dotGreen)}></div>
                <div className={styles.terminalTitle}>hola.mi — minilux</div>
              </div>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.codeGreen}>#!/usr/local/bin/minilux</span><br />
                  <br />
                  <span className={styles.codeGreen}>#Llamada al sistema</span><br />
                  <span className={styles.codeYellow}>printf</span>(<span className={styles.codeOrange}>"Usuario actual:\n"</span>, <span className={styles.codeYellow}>shell</span>(<span className={styles.codeOrange}>"whoami"</span>))<br />
                  <br />
                  <span className={styles.codeGreen}># variable</span><br />
                  <span className={styles.codeVariable}>$n1</span>=<span className={styles.codeNumber}>10</span><br />
                  <span className={styles.codeVariable}>$n2</span>=<span className={styles.codeNumber}>20</span><br />
                  <br />
                  <span className={styles.codeGreen}>#condicional</span><br />
                  <span className={styles.codePurple}>if</span> (<span className={styles.codeVariable}>$n1</span> {'<'} <span className={styles.codeVariable}>$n2</span>) <span className={styles.codeYellow}>{'{'}</span><br />
                  {'    '}<span className={styles.codeYellow}>printf</span>(<span className={styles.codeOrange}>"n1 es menor que n2"</span>)<br />
                  <span className={styles.codeYellow}>{'}'}</span> <span className={styles.codePurple}>else</span> <span className={styles.codeYellow}>{'{'}</span><br />
                  {'    '}<span className={styles.codeYellow}>printf</span>(<span className={styles.codeOrange}>"n1 no es menor que n2"</span>)<br />
                  <span className={styles.codeYellow}>{'}'}</span><br />
                  <br />
                  <span className={styles.codeGreen}>#info del sistema:</span><br />
                  <span className={styles.codeYellow}>printf</span>(<span className={styles.codeOrange}>"Información del sistema:"</span>)<br />
                  <span className={styles.codeYellow}>printf</span>(<span className={styles.codeYellow}>shell</span>(<span className={styles.codeOrange}>"uname -a"</span>))
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            <Translate id="homepage.installButton">Install Minilux</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="A tiny programming language designed for simplicity">
      <HomepageHeader />
      <main>
        <QuickExample />
      </main>
    </Layout>
  );
}
