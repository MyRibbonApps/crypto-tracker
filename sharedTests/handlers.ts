import { rest } from "msw";

const handlers = [
  rest.post("http://localhost:3001/searchCrypto", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Hey" }));
  }),
];

export { handlers, rest };
