import express, { Request, Response } from 'express';

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Liste l'ensemble des pokémons
app.get('/pokemon-cards',(req: Request, res:Response) => {
  res.status(200).json({message:"Liste de tous les pokémons"});
});

//Donne un pokémon celon son Id
app.get('/pokemon-cards/:pokemonCardId', (req: Request, res: Response) => {
    const { pokemonCardId } = req.params;
    res.status(200).json({ message: `Détails du pokémon ${pokemonCardId}` });
});

//Crée un pokémon
app.post('/pokemon-cards', (req: Request, res: Response) => {
    const body = req.body;
    res.status(201).json({ message: "Pokémon créé", data: body });
});

//Modifie un pokémon
app.patch('/pokemon-cards/:pokemonCardId', (req: Request, res: Response) => {
    const { pokemonCardId } = req.params;
    const body = req.body;
    res.status(200).json({ message: `Pokémon ${pokemonCardId} mis à jour`, data: body });
});

//Supprime un pokémon
app.delete('/pokemon-cards/:pokemonCardId', (req: Request, res: Response) => {
    const { pokemonCardId } = req.params;
    res.status(204).send(); 
});

export const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

export function stopServer() {
  server.close();
}
