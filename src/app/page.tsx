import Upload from "../../components/Upload";
import Sidebar from "../../components/Sidebar";
export default function Home() {
  return (
    <main>
      <div className="mainBox">
        <Sidebar/>
        <div className="workSpace flex-all-center">
          <Upload />
        </div>
        
      </div>
    </main>
  );
}
