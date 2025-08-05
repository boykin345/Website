import "../App.css";
import Navbar from "../components/Navbar";

function MyMacConfig() {
  return (
    <>
      <title>My Mac Config</title>

      <div className="navbar-container">
        <Navbar />
      </div>

      <section className="about-container">
        <h3>To use config, firstly install HomeBrew</h3>
        <p>then run the following command in your zsh terminal:</p>
        <div className="code-container">
          <pre className="code-block">
            <code>{`
brew update

echo "Installing CLI tools"
brew install \
  apr \
  apr-util \
  asciinema \
  brotli \
  c-ares \
  ca-certificates \
  gettext \
  icu4c@77 \
  liblinear \
  libnghttp2 \
  libssh2 \
  libunistring \
  libuv \
  lua \
  lz4 \
  mpdecimal \
  nmap \
  node \
  nvm \
  openssl@3 \
  pcre2 \
  python@3.13 \
  readline \
  sqlite \
  subversion \
  utf8proc \
  xz

echo "Installing GUI apps"
brew install --cask \
  audacity \
  betterdisplay \
  linearmouse

echo "✅ All done!"
`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}

export default MyMacConfig;
