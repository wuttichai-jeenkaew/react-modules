import { render, screen } from "@testing-library/react";
import App from "./App";
import DisplayJohn from "./components/DisplayJohn";
import { JohnProfile } from "./components/DisplayJohn";

describe("App", () => {
  it("ให้ Import ตัว Component Button  มา Render ลงไปบนหน้าเว็บ 3 ครั้ง (โดยกำหนดสีและขนาดของ Button แต่ละอันให้แตกต่างกันด้วย)", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
    screen.debug();
  });

  it("ให้ Import ตัว Component Spinner มา Render ลงไปบนหน้าเว็บ 3 ครั้ง (โดยกำหนดสีและขนาดของ Spinner แต่ละอันให้แตกต่างกันด้วย)", () => {
    const { container } = render(<App />);
    const spinners = container.getElementsByClassName("chakra-spinner");
    expect(spinners.length).toBe(3);
    screen.debug();
  });

  it("ให้ Import ตัว Component Input มา Render ลงไปบนหน้าเว็บ 3 ครั้ง (โดยกำหนด Variant ของ Input  แต่ละอันให้แตกต่างกันด้วย)", () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(3);
    screen.debug();
  });

  it("Component DisplayJohn ต้องมีโค้ดแบบที่กำหนดไว้ที่ Folder components ด้วยไฟล์ที่ชื่อว่า DisplayJohn.jsx และ export แบบ default มาใช้ที่ไฟล์ App.jsx", () => {
    render(<DisplayJohn />);
    const greeting = screen.getByText(/Hello, I'm John/i);
    expect(greeting).toBeInTheDocument();
    screen.debug();
  });

  it("Component JohnProfile ต้องมีโค้ดแบบที่กำหนดไว้ที่ Folder components ด้วยไฟล์ที่ชื่อว่า DisplayJohn.jsx และ export แบบ named มาใช้ที่ไฟล์ App.jsx", () => {
    render(<JohnProfile />);
    const jobTitle1 = screen.getByText(/Full Stack Developer/i);
    const jobTitle2 = screen.getByText(/React\.JS Developer/i);
    const hobby = screen.getByText(/Love Mookrata/i);
    expect(jobTitle1).toBeInTheDocument();
    expect(jobTitle2).toBeInTheDocument();
    expect(hobby).toBeInTheDocument();
  });

  it("Component JohnProfile ต้องมีโค้ดแบบที่กำหนดไว้ที่ Folder components ด้วยไฟล์ที่ชื่อว่า DisplayJohn.jsx และ export แบบ named มาใช้ที่ไฟล์ App.jsx", () => {
    render(<App />);
    const greeting = screen.getByText(/Hello, I'm John/i);
    const jobTitle1 = screen.getByText(/Full Stack Developer/i);
    const jobTitle2 = screen.getByText(/React\.JS Developer/i);
    const hobby = screen.getByText(/Love Mookrata/i);
  });
});
