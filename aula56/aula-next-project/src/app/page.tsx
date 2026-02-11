import Navbar from "@/components/layout/Navbar";
import Contador from "@/components/Counter";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-screen h-screen items-center justify-center text-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-row items-center justify-center gap-8">
          <Card 
        title="Exercise: Make a Card Component"
        description="Welcome to the Frontend2 & SEO course where we are going to learn about React" 
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
        >
        <Button
          name="Click Me!"
        />
      </Card>
      <Card 
        title="Exercise: Make a Counter Component"
        description="Interactive counter component"
        altDescription="Tic-Tac!"
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
      >
        <Contador/>
      </Card>
        </main>
      </div>
    </>
  );
}
