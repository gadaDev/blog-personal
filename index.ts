import express, { Application, Request, Response } from "express";

class Server {
  private PORT: number | string;
  private app: Application;

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
    this.setup();
    this.routes();
    this.start();
  }

  private routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({ hello: "hello" });
    });
  }

  private start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`App running on port ${this.PORT}`);
    });
  }

  private setup(): void {}
}

let server = new Server();
