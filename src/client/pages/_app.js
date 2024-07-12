import "@/styles/globals.css";
import '@/styles/LandingPage.css';
import '@/styles/Footnote.css';
import '@/styles/Navbar.css';
import '@/styles/Header.css';
import '@/styles/Blog.css';
import '@/styles/Newsletter.css';
import '@/styles/Act.css';
import '@/styles/Wiki.css';
import '@/styles/WikiWorld.css';
import '@/styles/WikiVendor.css';
import '@/styles/Shop.css';
import '@/styles/Allies.css';
import '@/styles/Water.css';
import '@/styles/userSignup.css';

import '@/styles/Earth.css';
import SageWikiLayout from "@/app/SageWikiLayout";

export default function App({ Component, pageProps }) {
  return (
    <SageWikiLayout>
      <Component {...pageProps} />
    </SageWikiLayout>
  );
}
