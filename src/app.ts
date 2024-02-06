import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const port = 3030;
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
