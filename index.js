import "dotenv/config";
import { say } from 'cowsay';



console.log(say({ text: `Hi i'm ${process.env.MY_NAME}, and i'm from ${process.env.MY_CAMPUS} campus !` }));




