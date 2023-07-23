import Board from "@/components/Board";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="bg-gray-800 flex flex-col min-h-screen">
      <Navbar />
      <Board />
    </main>
  )
}
