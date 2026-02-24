import Navbar from "@/components/layout/Navbar";
import Contador from "@/components/Counter";
import Card from "@/components/Card";
import { Button } from "@/components/Button";
import MyComponent from "@/components/Mount";
import Exemplo from "@/components/Memo";
import InputFocus from "@/components/Ref";
import Counter from "@/components/CounterRedux";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-screen h-screen items-center justify-center text-center bg-zinc-50 font-sans dark:bg-black">
        <main className="grid max-h-screen w-full max-w-7xl grid-cols-4 gap-x-8 gap-y-8 overflow-hidden p-6 mt-24">
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
      <Card title="Component" description="Mounted or Unmounted" profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg">
        <MyComponent/>
      </Card>
      <Card
        title="Exercise: Make a Memo Component"
        description="Interactive memo component"
        altDescription="Tic-Tac!"
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
      >
        <Exemplo/>
      </Card>
      <Card 
        title="Exercise: Make a Ref Component" 
        description="Interactive ref component" 
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg">
        <InputFocus/>
      </Card>
      <Card
        title="Exercise: Make a counter using redux"
        description="Interactive counter component using redux"
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
      >
        <Counter/>
      </Card>
        </main>
      </div>
    </>
  );
}
