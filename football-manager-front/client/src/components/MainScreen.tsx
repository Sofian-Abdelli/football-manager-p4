import type { ReactNode } from "react";
import "./MainScreen.css";

interface MainScreenProps {
  children?: ReactNode;
}

const MainScreen = ({ children }: MainScreenProps) => {
  return (
    <main className="main-screen">
      <div className="neon-border-1" />
      <div className="neon-border-2" />

      <div className="content-wrapper">
        <h1 className="title">FOOTBALL MANAGER</h1>
        <p className="subtitle">Create your team</p>
        {children}
      </div>
    </main>
  );
};

export default MainScreen;
