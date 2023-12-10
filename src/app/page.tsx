import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
  SectionContact,
  SectionInfo,
  SectionLeads
} from '@/components/sections';

export default function Home() {
  return (
    <div className="Wrapper-container">
      <Header className="class-Header" />
      <main className="class-Main md:pt-28 md: pb-28">
        <div className="grid grid-auto-rows-auto gap-36">
          <section>
            <SectionLeads />
          </section>
          <section>
            <SectionInfo />
          </section>
          <section>
            <SectionContact />
          </section>
        </div>
      </main>
      <Footer className="class-Footer" />
    </div>
  );
}
