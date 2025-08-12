import "../../App.css";
import Navbar from "../../components/Navbar";

function MyMacConfig() {
  return (
    <>
      <title>My Mac Config</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="blog-container">
        <h1 className="blog-text">My Mac Config</h1>
        <div className="code-container">
          <pre className="code-block">
            <code>{`
brew update

brew install \

\n  apr \
\n  apr-util \
\n   asciinema \
\n   brotli \
\n   c-ares \
\n   ca-certificates \
\n   gettext \
\n   icu4c@77 \
\n   liblinear \
\n   libnghttp2 \
\n   libssh2 \
\n   libunistring \
\n   libuv \
\n   lua \
\n   lz4 \
\n   mpdecimal \
\n   nmap \
\n   node \
\n   nvm \
\n   openssl@3 \
\n   pcre2 \
\n   python@3.13 \
\n   readline \
\n   sqlite \
\n   subversion \
\n   utf8proc \
\n   xz

brew install --cask \

\n  audacity \
\n  betterdisplay \
\n  linearmouse \
\n  alt-tab \
\n  raycast \
\n  adguard \
\n  docker \

echo "All done!"
`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}

export default MyMacConfig;
