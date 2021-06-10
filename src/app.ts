import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 80;

app.use(routes);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

export default app;
