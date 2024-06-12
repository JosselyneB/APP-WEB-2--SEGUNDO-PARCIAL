import env from '../../config';
import app from '../../app';

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

