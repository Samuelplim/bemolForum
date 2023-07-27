import { useEffect } from "react";
import { ButtonLarge, NavMenu } from "../components";
import { io } from "socket.io-client";


export const HomePage = () => {
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:3000'); // Replace with your server URL

    // Listen for the "connect" event, indicating a successful connection
    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server!');
    });

    // Listen for the "customEvent" event from the server
    socket.on('customEvent', (data) => {
      console.log('Received customEvent from the server:', data);
      // Handle the data received from the server as needed
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <>
    <header><NavMenu/></header>
    <main className="bg-naturalWhite h-screen">
     <div className=" mt-4 px-2">
      <p>Não encontrou o que procura?</p>
      <ButtonLarge title="criar um topico" className="" />
    </div>

     
    </main>
    </>
  );
};
